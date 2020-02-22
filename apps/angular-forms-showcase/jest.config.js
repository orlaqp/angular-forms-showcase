module.exports = {
    name: 'angular-forms-showcase',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/angular-forms-showcase',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js'
    ]
};
