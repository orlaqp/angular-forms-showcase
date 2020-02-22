module.exports = {
    name: 'login-template-driven',
    preset: '../../../jest.config.js',
    coverageDirectory: '../../../coverage/libs/login/template-driven',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js'
    ]
};
