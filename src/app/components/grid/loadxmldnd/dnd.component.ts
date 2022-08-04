import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validator,
} from '@angular/forms';
import { PartyService } from 'app/services/party.service';
import { MatDialogRef } from '@angular/material/dialog';
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { SnackService } from '../../../services/snack.service';
import { PartyExtRefInput } from 'app/services/api.service';

import {
  IParty,
  Flag,
  Narrative,
  Association,
  Reference,
  Classification,
  Instrument,
  Address,
} from './model.type';

const options = {
  ignoreAttributes: true,
  removeNSPrefix: true,
  htmlEntities: true,
};

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss'],
})
export class DndComponent {
  constructor(
    private fb: UntypedFormBuilder,
    private partyService: PartyService,
    private snackService: SnackService,
    public dialogRef: MatDialogRef<DndComponent>
  ) {
    this.createForm();
  }
  @ViewChild('fileDropRef', { static: false }) fileDropEl: ElementRef;
  files: any[] = [];
  formGroup: UntypedFormGroup;
  fileData: any;
  VERSION_NO = 1;

  map: any;

  createForm() {
    this.formGroup = this.fb.group({});
  }

  // tslint:disable-next-line:member-ordering
  onFileDropped($event): void {
    this.prepareFilesList($event);
  }

  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      //  console.log ('Upload in progress.');
      return;
    }
    this.files.splice(index, 1);
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 4);
      }
    }, 10);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = '';
    this.uploadFilesSimulator(0);
  }

  onCreate() {
    let data: any;
    for (const item of this.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileString = e.target.result as string;
        const lines = fileString.split('\n');
        for (const line of lines) {
          try {
            const result = XMLValidator.validate(line, {
              allowBooleanAttributes: true,
            });
            if (result) {
              const parser = new XMLParser(options);
              data = parser.parse(line) as IParty;
            }
            else{
              this.snackService.showMessage(
                    'Unable to parse the XML file. Please check the file contents for the correct format'
              );
            }
          } catch (e) {
            this.snackService.showMessage(
              `Unable to parse the XML file. Please check the file contents for the correct format\n${e.message}`
            );
          }
        }
        this.processFileDataToParty(data.Party);
      };
      reader.readAsText(item);
      reader.onerror = this.errorHandler;
    }
    this.dialogRef.close({ event: 'Cancel' });
  }

  errorHandler(evt): any {
    if (evt.target.error.name === 'NotReadableError') {
      console.log(
        'File can not be read properly ... please makes sure the file is xml'
      );
    }
  }

  updateProgress(evt: any) {
    if (evt.lengthComputable) {
      // evt.loaded and evt.total are ProgressEvent properties
      const loaded = evt.loaded / evt.total;
      if (loaded < 1) {
        this.uploadFilesSimulator(loaded);
      }
    }
  }

  async processFileDataToParty(party: IParty) {
    try {      
        await this.party(party).catch((err) => {this.snackService.showMessage(err.message)});
        await this.reference(party);
        await this.narrative(party);
        await this.classification(party);
        await this.flag(party);
        await this.instrument(party);
        await this.association(party);
        await this.address(party);
    }
    catch(e){
        this.snackService.showMessage(e.message);
    }
  }

  private async party(party: IParty) {
    let user = localStorage.getItem('USER_ID');
    if (user === null) {
      user = 'admin';    
    }

    if (party) {
      const today = new Date();
      const inputObject = {
        client_ref: '',
        party_ref: party.OriginReference,
        party_type: party.Type,
        party_short_name: party.Name,
        party_long_name: party.LongName,
        party_extra_long_name: party.ExtraLongName,
        active_ind: 'A',
        has_swift_config: 'N',
        has_netting_config: 'N',
        version_no: 0,
        version_date: today.toISOString(),
        version_user: user,
      };
      if (inputObject) {
        this.partyService.createParty(inputObject).subscribe(async (val) => {
          console.log('Update completed');
        });
      }
    }
  }

  private async flag(party: IParty) {
    if (party.Flag) {
      if (Array.isArray(party.Flag)) {
        const flags: Flag[] = party.Flag;
        this.updatePartyFlag(party.OriginReference, flags);
      } else {
        const flag: Flag = party.Flag;
        this.updateSinglePartyFlag(party.OriginReference, flag);
      }
    }
  }

  private async classification(party: IParty) {
    if (party.Classification) {
      if (Array.isArray(party.Classification)) {
        const classifications: Classification[] = party.Classification;
        this.updateClassification(party.OriginReference, classifications);
      } else {
        const classification: Classification = party.Classification;
        this.updateSingleClassification(party.OriginReference, classification);
      }
    }
  }

  private async narrative(party: IParty) {
    if (party.Narrative) {
      if (Array.isArray(party.Narrative)) {
        const narratives: Narrative[] = party.Narrative;
        this.updatePartyNarrative(party.OriginReference, narratives);
      } else {
        const narrative: Narrative = party.Narrative;
        this.updatePartySingleNarrative(party.OriginReference, narrative);
      }
    }
  }

  private async reference(party: IParty) {
    if (party.Reference) {
      if (Array.isArray(party.Reference)) {
        const references: Reference[] = party.Reference;
        this.updatePartyReference(party.OriginReference, references);
      } else {
        const references: Reference = party.Reference;
        this.updatePartySingleReference(party.OriginReference, references);
      }
    }
  }

  private async association(party: IParty) {
    if (party.Association) {
      if (Array.isArray(party.Association)) {
        const associations: Association[] = party.Association;
        this.updatePartyAssociation(party.OriginReference, associations);
      } else {
        const association: Association = party.Association;
        this.updateSinglePartyAssociation(party.OriginReference, association);
      }
    }
  }

  private async instrument(party: IParty) {
    if (party.Instrument) {
      if (Array.isArray(party.Instrument)) {
        const instruments: Instrument[] = party.Instrument;
        this.updatePartyInstruments(party.OriginReference, instruments);
      } else {
        const instrument: Instrument = party.Instrument;
        this.updateSinglePartyInstrument(party.OriginReference, instrument);
      }
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  private async updatePartyInstruments(
    partyRef: string,
    instruments: Instrument[]
  ) {
    const today = new Date();
    if (Array.isArray(instruments)) {
      for (const val of instruments) {
        console.log(console.log(val));
        const input = {
          party_ref: partyRef,
          client_ref: '',
          instr_ref: val.Type,
          instr_type: val.Instrument.Value,
          instr_ref_type: val.Instrument.Type,
          description: '',
          version_date: today.toISOString(),
          version_no: 1,
          version_user: 'ADMIN',
        };
        this.partyService.createPartyInstr(input);
      }
    }
  }

  private async updateSinglePartyInstrument(
    partyRef: string,
    instrument: Instrument
  ) {
    const today = new Date();
    console.log('create single instrument', instrument);
    const input = {
      party_ref: partyRef,
      client_ref: '',
      instr_ref: instrument.Type,
      instr_type: instrument.Instrument.Value,
      instr_ref_type: instrument.Instrument.Type,
      description: '',
      version_date: today.toISOString(),
      version_no: 1,
      version_user: 'ADMIN',
    };
    this.partyService.createPartyInstr(input);
  }

  private async updateClassification(
    partyRef: string,
    classifications: Classification[]
  ) {
    const today = new Date();
    for (const val of classifications) {
      const input = {
        party_ref: partyRef,
        client_ref: '',
        class_type: val.Type,
        class_code: val.Classification,
        description: '',
        version_date: today.toISOString(),
        version_no: this.VERSION_NO,
        version_user: 'ADMIN',
      };
      this.partyService.createPartyClassification(input);
    }
  }

  private async updateSingleClassification(
    partyRef: string,
    classification: Classification
  ) {
    const today = new Date();
    const input = {
      party_ref: partyRef,
      client_ref: '',
      class_type: classification.Type,
      class_code: classification.Classification,
      description: '',
      version_date: today.toISOString(),
      version_no: this.VERSION_NO,
      version_user: 'ADMIN',
    };
    this.partyService.createPartyClassification(input);
  }

  private async updatePartySingleReference(
    partyRef: string,
    reference: Reference
  ) {
    const today = new Date();
    const input = {
      party_ref: partyRef,
      client_ref: '',
      party_ext_ref_type: reference.Type,
      party_ext_ref: reference.Reference,
      description: '',
      version_date: today.toISOString(),
      version_no: this.VERSION_NO,
      version_user: 'ADMIN',
    };
    this.createPartyExtRef(input);
  }

  private async updatePartyReference(
    partyRef: string,
    references: Reference[]
  ) {
    const today = new Date();
    for (const val of references) {
      const input = {
        party_ref: partyRef,
        client_ref: '',
        party_ext_ref_type: val.Type,
        party_ext_ref: val.Reference,
        description: '',
        version_date: today.toISOString(),
        version_no: this.VERSION_NO,
        version_user: 'ADMIN',
      };

      this.createPartyExtRef(input);
    }
  }

  private async createPartyExtRef(data: PartyExtRefInput) {
    this.partyService.createPartyExtRef(data);
  }

  private async updatePartyNarrative(
    partyRef: string,
    narratives: Narrative[]
  ) {
    const today = new Date();
    for (const val of narratives) {
      const input = {
        party_ref: partyRef,
        client_ref: '',
        narr_type: val.Type,
        narrative: val.Narrative,
        description: '',
        version_date: today.toISOString(),
        version_no: this.VERSION_NO,
        version_user: 'ADMIN',
      };
      this.partyService.createPartyNarrative(input);
    }
  }

  private async updatePartySingleNarrative(
    partyRef: string,
    narrative: Narrative
  ) {
    const today = new Date();
    const input = {
      party_ref: partyRef,
      client_ref: '',
      narr_type: narrative.Type,
      narrative: narrative.Narrative,
      description: '',
      version_date: today.toISOString(),
      version_no: this.VERSION_NO,
      version_user: 'ADMIN',
    };
    this.partyService.createPartyNarrative(input);
  }

  private async updatePartyFlag(partyRef: string, flags: Flag[]) {
    console.log('updatePartyFlag', flags);
    for (const val of flags) {
      console.log(`${val.Type} : ${val.Flag}`);
      const today = new Date();
      let flagType: number;
      flagType = val.Type;
      const input = {
        party_ref: partyRef,
        client_ref: '',
        flag_type: flagType,
        flag_code: val.Flag,
        description: '',
        version_date: today.toISOString(),
        version_no: this.VERSION_NO,
        version_user: 'ADMIN',
      };
      this.partyService.createPartyFlag(input);
    }
  }

  private async updateSinglePartyFlag(partyRef: string, flag: Flag) {
    console.log('updatePartyFlag', flag);
    const today = new Date();
    let flagType: number;
    flagType = flag.Type;
    const input = {
      party_ref: partyRef,
      client_ref: '',
      flag_type: flagType,
      flag_code: flag.Flag,
      description: '',
      version_date: today.toISOString(),
      version_no: this.VERSION_NO,
      version_user: 'ADMIN',
    };
    this.partyService.createPartyFlag(input);
  }

  private async updatePartyAssociation(
    partyRef: string,
    associations: Association[]
  ) {
    if (Array.isArray(associations)) {
      for (const val of associations) {
        console.log(associations);
        const today = new Date();
        const input = {
          party_ref: partyRef,
          client_ref: '',
          assoc_type: val.Party.Type,
          assoc_party_ref: val.Type,
          description: '',
          version_date: today.toISOString(),
          version_no: this.VERSION_NO,
          version_user: 'ADMIN',
        };
        this.partyService.createPartyAssociation(input);
      }
    }
  }

  private async updateSinglePartyAssociation(
    partyRef: string,
    association: Association
  ) {
    console.log(association);
    const today = new Date();
    const input = {
      party_ref: partyRef,
      client_ref: '',
      assoc_type: association.Party.Type,
      assoc_party_ref: association.Type,
      description: '',
      version_date: today.toISOString(),
      version_no: this.VERSION_NO,
      version_user: 'ADMIN',
    };
    this.partyService.createPartyAssociation(input);
  }

  private async address(party: IParty) {
    console.log('updatePartyAddress', party.Address.ContactName);
    const today = new Date();
    const add = {
      party_ref: party.OriginReference,
      client_ref: 'CORE',
      addr_type: party.Address.Type,
      contact_name: party.Address.ContactName,
      contact_title: party.Address.ContactTitle,
      addr_line1: party.Address.Line1,
      addr_line2: party.Address.Line2,
      addr_line3: party.Address.Line3,
      addr_line4: party.Address.Line4,
      addr_line5: '',
      addr_line6: '',
      post_code: party.Address.PostCode,
      int_dial_code: party.Address.IntDialCode.toString(),
      phone_no: party.Address.PhoneNumber,
      fax_no: '',
      email: party.Address.Email,
      version_date: today.toISOString(),
      version_no: this.VERSION_NO,
      version_user: 'ADMIN',
    };
    this.partyService.createPartyAddress(add);
  }
}
