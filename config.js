// In real applications, you should not transpile code in the browser. You can see how to create your own application with Angular and DevExtreme here:
// https://js.devexpress.com/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/
System.config({
  transpiler: 'ts',
  typescriptOptions: {
    module: "system",
    emitDecoratorMetadata: true,
    experimentalDecorators: true
  },

  meta: {
    'typescript': {
      "exports": "ts"
    },
    'devextreme/localization.js': {
      "esModule": true
    }
  },

  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    'ts': 'npm:plugin-typescript@8.0.0/lib/plugin.js',
    'typescript': 'npm:typescript@3.5.3/lib/typescript.js',
    '@angular': 'npm:@angular',
    'tslib': 'npm:tslib@2.2.0/tslib.js',
    'rxjs': 'npm:rxjs@6.4.0',
    'rrule': 'npm:rrule@2.6.6/dist/es5/rrule.js',
    'luxon': 'npm:luxon@1.26.0/build/global/luxon.min.js',
    'es6-object-assign': 'npm:es6-object-assign@1.1.0',
    'devextreme': 'npm:devextreme@20.2.7',
    'jszip': 'npm:jszip@3.6.0/dist/jszip.min.js',
    'devextreme-quill': 'npm:devextreme-quill@0.10.3/dist/dx-quill.min.js',
    'devexpress-diagram': 'npm:devexpress-diagram@2.0.23',
    'devexpress-gantt': 'npm:devexpress-gantt@2.0.29',
    'devextreme-angular': 'npm:devextreme-angular@20.2.6',
    'preact': 'npm:preact@10.5.13/dist/preact.js',
    'preact/hooks': 'npm:preact@10.5.13/hooks/dist/hooks.js'
  },

  packages: {
    'app': {
      main: './post-appointment.component.ts',
      defaultExtension: 'ts'
    },
    'devextreme': {
      defaultExtension: 'js'
    },
    'devextreme/events/utils': {
      main: 'index'
    },
    'devextreme/events': {
      main: 'index'
    },
    'es6-object-assign': {
      main: './index.js',
      defaultExtension: 'js'
    }
  },

  packageConfigPaths: [
    "npm:@angular/*/package.json",
    "npm:@angular/common/*/package.json",
    "npm:rxjs/package.json",
    "npm:rxjs/operators/package.json",
    "npm:devextreme-angular/*/package.json",
    "npm:devextreme-angular/ui/*/package.json",
    "npm:devextreme-angular/package.json",
    "npm:devexpress-diagram/package.json",
    "npm:devexpress-gantt/package.json",
  ]
});


