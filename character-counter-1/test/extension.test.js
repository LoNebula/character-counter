// This file contains unit tests for the extension written in JavaScript.
// It imports the main extension logic and tests its functionality.

const assert = require('assert');
const { activate } = require('../src/extension');

describe('Extension Tests', function() {
    it('should activate the extension', function() {
        const result = activate();
        assert.strictEqual(result, true, 'The extension should activate successfully');
    });

    // Add more tests as needed
});