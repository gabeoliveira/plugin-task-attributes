const pulumi = require("@pulumi/pulumi");
require('dotenv').config();

const { FlexPlugin } = require('twilio-pulumi-provider');

const taskAttributesFlexPlugin = new FlexPlugin("task-attributes-flex-plugin", { 
    attributes: {
        cwd: "../",
        runTestsOnPreview: true
    }
});

export let output = {
    taskAttributesFlexPluginSid: taskAttributesFlexPlugin.sid
}
