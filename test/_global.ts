// Global preconditions file

// --reporter spec
// --reporter mocha-allure-reporter

interface IAllure {
    /**
     * Define step function.Result of each call of this function will be recorded into report.
     */
    createStep(name: string, stepFn: string)

    /**
     * Save attachment to test. If you're calling this inside step function or during its execution (e.g. asynchronously via promises), attachment will be saved to step function.
     * 
     * @param name attachment name.Note that it is not then name of the file, actual filename will be generated.
     * @param content attachment content.If you pass Buffer or String, it will be saved to file immediately.If you are passing Function, you will get decorated function and you can call it several times to trigger attachment.General purpose of the second case is an ability to create utility function to take screenshot.You can define function for you test framework only once and then call it each time you need a screenshot.
     * @param type attachment MIME - type.If you omit this argument we'll try to detect type automatically via file-type library
     */
    createAttachement(name: string, content: Buffer | String | Function, type?: string)
    /**
     * set detailed test description, if test name is not enough.
     */
    description(description: string)
    /**
     * set test severity, one of: blocker, critical, normal, minor, trivial.You can also use constants like allure.SEVERITY.BLOKER.
     */
    severity(severity: string)
    /**
     * assign feature to test
     */
    feature(featureName: string)
    /**
     * assign user story to test.See documentation for details
     */
    story(storyName: string)
    /**
     * provide parameters, which had been used in test.Unlike other languages, javascript test methods usually doesn't have special arguments (only callbacks), so developers use other way to populate parameters to test. This method is to provide them to Allure
     */
    addArgument(name: string, value: string)
    /**
     * save environment value.It is similar to addArgument method, but it is designed to store more verbose data, like HTTP - links to test page or used package version.
     */
    addEnvironment(name: string, value: string)
}



// Hardcoded! Override it in process environment variable
process.env.API_URL = 'https://my-json-server.typicode.com/Xotabu4/demo'

// Global before all hook
before(function () {
    //allure.addEnvironment("URL", process.env.API_URL)
})