# Production Support Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4206/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Add Query to Front End
1. Update the backend GraphQL with the appropriate resolver to retrieve the data from the database based upon the necessary parameters. Check the README file in the server on the steps to create a resolver function.
2. Open the GraphQL playground and create your query ensure that the parameters and return values are correct. 

```
query getFirstClient {
  getFirstClient{
    client_id
    description
  }
}
```
3. Copy the query into the prd.graphql file exactly as it was run from the playground
4. Run the generate script  from the command line. The gql command is a script located in the package.json file. The script runs codegen, which creates the Typescript code automatically for us so we do not have to tediously write the boilerplate code ourselves. 

```bash
npm run gql 
```

5. Open the prd.service.ts file or kanban.service.ts file to create the function to call and return values from the query.
6. Create function 
   ```
   private readonly getFirstClientIdGQL: kanbanApi.GetFirstClientGQL,

   public getFirstClient() {
    return this.getFirstClientGQL.watch().valueChanges.pipe(map((result) => result.data.getFirstClient));
  }
   ```
7. The function has now been added to the service which can then be called from the application. 
8. The service is then injected into the component which it might be called from. 
9. The function above returns an Observable which then can be subscribed to. 
10. On subscription the data will be retrieved from the database and mapped to the type assigned to the function. 
