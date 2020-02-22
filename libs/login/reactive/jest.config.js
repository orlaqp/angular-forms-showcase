module.exports = {
    name: 'login-reactive',
    preset: '../../../jest.config.js',
    coverageDirectory: '../../../coverage/libs/login/reactive',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js'
    ]
};
