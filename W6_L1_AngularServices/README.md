Component refresher
    •    Show index.html, that it contains <app-root> component
    •    Show app.component.ts:
        •    has the app-root selector
        •    has a function named rollDice() that currently just generates 2 random numbers and stores them in die1 and die2 properties
    •    TODO 1:
        •    Show die.component.ts, die.component.html, and app.component.html,
        •    POLLEV Q1!!!! Then...
        •    add two <app-die> using die1 and die2 as input,
        •    WHAT WILL RENDER? - show what renders - two dice with default face 1
    •    TODO 2:
        •    Show dice.component.html,
        •    update img tag to use ‘value’ variable
        •    now shows nothing, - WHY? because default values of die1 and die2 are 0
    •    TODO 3:
        •    In app.component.html,
        •    POLLEV Q2!!! Then...
        •    add button to roll dice
        •    use die1 and die2 to show total
    •    this should now show die rolls and totals; just not using service

Build service
    •    Create a service via command line: ng generate service rig-dice
    •    First, set up dice service to generate random numbers
    •    Open up rig-dice.service.ts
        •    Add HttpClient service:
            •    Inject HttpClient service with import line
            •    add to constructor
        •    Create rollDie1() and rollDie2() methods 
            •    use Math.Random to return a random number 1-6
    •    Then, set up main app component to use die service instead of generating numbers itself
    •    Open app.component.ts
        •    TODO 4: import die service
        •    TODO 5: add die service to constructor
        •    TODO 6: use die service to generate die roll results
        •    this show now use service, but still random die rolls
    •    Finally, set up rig dice service to read rigged dice file
        •    show rigged_rolls.json 
    •    Open rig-dice.service.ts
        •    add variables for die1 and die2, to store possible (rigged) rolls
        •    add variables for die1Index and die2Index, to store rolls
        •    in constructor, use HTTP client to fill die1 and die2
        •    in rollDie functions, 
            •    use die1 and die2 index to access values in die1 and die2
    •    this should now display rigged die rolls
