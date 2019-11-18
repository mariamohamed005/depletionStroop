/**************** 
 * Stroop2 Test *
 ****************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Stroop2';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeMessageRoutineBegin);
flowScheduler.add(welcomeMessageRoutineEachFrame);
flowScheduler.add(welcomeMessageRoutineEnd);
flowScheduler.add(instrStroopRoutineBegin);
flowScheduler.add(instrStroopRoutineEachFrame);
flowScheduler.add(instrStroopRoutineEnd);
const trials_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_1LoopBegin, trials_1LoopScheduler);
flowScheduler.add(trials_1LoopScheduler);
flowScheduler.add(trials_1LoopEnd);
flowScheduler.add(stroopBreakRoutineBegin);
flowScheduler.add(stroopBreakRoutineEachFrame);
flowScheduler.add(stroopBreakRoutineEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(stroopBreakRoutineBegin);
flowScheduler.add(stroopBreakRoutineEachFrame);
flowScheduler.add(stroopBreakRoutineEnd);
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin, trials_4LoopScheduler);
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);
flowScheduler.add(instrMathRoutineBegin);
flowScheduler.add(instrMathRoutineEachFrame);
flowScheduler.add(instrMathRoutineEnd);
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin, trials_3LoopScheduler);
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(instrReminderRoutineBegin);
flowScheduler.add(instrReminderRoutineEachFrame);
flowScheduler.add(instrReminderRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(end_messageRoutineBegin);
flowScheduler.add(end_messageRoutineEachFrame);
flowScheduler.add(end_messageRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var welcomeMessageClock;
var welcome;
var key_resp_8;
var instrStroopClock;
var instrStroopText;
var key_resp;
var trialStroopClock;
var target;
var response;
var stroopBreakClock;
var text_4;
var key_resp_9;
var instrMathClock;
var text_2;
var key_resp_2;
var MathClock;
var text_feedback;
var key_Resp;
var math_problems;
var instrReminderClock;
var text;
var instr_resp;
var end_messageClock;
var text_3;
var key_resp_3;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "welcomeMessage"
  welcomeMessageClock = new util.Clock();
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: 'You are about to begin an experiment which consists of several tasks in the following order: \n\n1. Stroop Task Practice \n2. Stroop Task 1\n3. Stroop Task 2\n4. Math Problems \n5. Stroop Task 3\n\nPress Q to begin.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instrStroop"
  instrStroopClock = new util.Clock();
  instrStroopText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrStroopText',
    text: 'In this task, you will see color names (red, green, blue) in different "print" colors. You need to respond to the print color not the actual word. \n\nFor example if the word "red" appears in blue ink, the correct answer would be blue and not red. \n\nUse the following keys:\n\nJ = red\nK = green \nL = blue\n\nPress Q when you are ready to begin.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trialStroop"
  trialStroopClock = new util.Clock();
  target = new visual.TextStim({
    win: psychoJS.window,
    name: 'target',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  response = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stroopBreak"
  stroopBreakClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'You may now take a 1 minute break or press Q when you are ready to continue. \n\nRemember: \n\nJ- red \nK- green \nL- blue \n\n',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trialStroop"
  trialStroopClock = new util.Clock();
  target = new visual.TextStim({
    win: psychoJS.window,
    name: 'target',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  response = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stroopBreak"
  stroopBreakClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'You may now take a 1 minute break or press Q when you are ready to continue. \n\nRemember: \n\nJ- red \nK- green \nL- blue \n\n',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trialStroop"
  trialStroopClock = new util.Clock();
  target = new visual.TextStim({
    win: psychoJS.window,
    name: 'target',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  response = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instrMath"
  instrMathClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'You will now complete as math problems as you can in 12 minutes. However, you will have a limit of 2 minute per question. \n\nTry to get as many correct as you can.\n\nType your answer, you are allowed to use all the keyboard keys. Press return to submit your response and move to the next question.\n\nIf you absolutely do not know the answer, press return to skip the question.\n\nPress Q to begin\n\nGood luck! ',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Math"
  MathClock = new util.Clock();
  text_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_Resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  math_problems = new visual.TextStim({
    win: psychoJS.window,
    name: 'math_problems',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instrReminder"
  instrReminderClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'You will now complete a Stroop Task again. \n\nRemember, in this task you will see color names (red, green, blue) in different "print" colors. You need to respond to the print color not the actual word. \n\nFor example if the word "red" appears in blue ink, the correct answer would be blue and not red. :\n\nJ = red\nK = green\nL = blue\n\nPress return when you are ready to begin',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trialStroop"
  trialStroopClock = new util.Clock();
  target = new visual.TextStim({
    win: psychoJS.window,
    name: 'target',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  response = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_message"
  end_messageClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'You have now finished the study.\n\nPress any key.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var welcomeMessageComponents;
function welcomeMessageRoutineBegin() {
  //------Prepare to start Routine 'welcomeMessage'-------
  t = 0;
  welcomeMessageClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_8.keys = undefined;
  key_resp_8.rt = undefined;
  // keep track of which components have finished
  welcomeMessageComponents = [];
  welcomeMessageComponents.push(welcome);
  welcomeMessageComponents.push(key_resp_8);
  
  welcomeMessageComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function welcomeMessageRoutineEachFrame() {
  //------Loop for each frame of Routine 'welcomeMessage'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = welcomeMessageClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *welcome* updates
  if (t >= 0.0 && welcome.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    welcome.tStart = t;  // (not accounting for frame time here)
    welcome.frameNStart = frameN;  // exact frame index
    welcome.setAutoDraw(true);
  }

  
  // *key_resp_8* updates
  if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_8.tStart = t;  // (not accounting for frame time here)
    key_resp_8.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
  }

  if (key_resp_8.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_8.getKeys({keyList: ['q'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_8.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_8.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  welcomeMessageComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function welcomeMessageRoutineEnd() {
  //------Ending Routine 'welcomeMessage'-------
  welcomeMessageComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
  if (typeof key_resp_8.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
      routineTimer.reset();
      }
  
  key_resp_8.stop();
  // the Routine "welcomeMessage" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var instrStroopComponents;
function instrStroopRoutineBegin() {
  //------Prepare to start Routine 'instrStroop'-------
  t = 0;
  instrStroopClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp.keys = undefined;
  key_resp.rt = undefined;
  // keep track of which components have finished
  instrStroopComponents = [];
  instrStroopComponents.push(instrStroopText);
  instrStroopComponents.push(key_resp);
  
  instrStroopComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function instrStroopRoutineEachFrame() {
  //------Loop for each frame of Routine 'instrStroop'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instrStroopClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instrStroopText* updates
  if (t >= 0.0 && instrStroopText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrStroopText.tStart = t;  // (not accounting for frame time here)
    instrStroopText.frameNStart = frameN;  // exact frame index
    instrStroopText.setAutoDraw(true);
  }

  
  // *key_resp* updates
  if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp.tStart = t;  // (not accounting for frame time here)
    key_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
  }

  if (key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp.getKeys({keyList: ['q'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  instrStroopComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instrStroopRoutineEnd() {
  //------Ending Routine 'instrStroop'-------
  instrStroopComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "instrStroop" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials_1;
var currentLoop;
var trialIterator;
function trials_1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stroopcsv.csv',
    seed: undefined, name: 'trials_1'});
  psychoJS.experiment.addLoop(trials_1); // add the loop to the experiment
  currentLoop = trials_1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials_1[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrial_1 = result.value;
    thisScheduler.add(importConditions(trials_1));
    thisScheduler.add(trialStroopRoutineBegin);
    thisScheduler.add(trialStroopRoutineEachFrame);
    thisScheduler.add(trialStroopRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trials_1LoopEnd() {
  psychoJS.experiment.removeLoop(trials_1);

  return Scheduler.Event.NEXT;
}

var trials_2;
function trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 15, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stroopcsv.csv',
    seed: undefined, name: 'trials_2'});
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials_2[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrial_2 = result.value;
    thisScheduler.add(importConditions(trials_2));
    thisScheduler.add(trialStroopRoutineBegin);
    thisScheduler.add(trialStroopRoutineEachFrame);
    thisScheduler.add(trialStroopRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}

var trials_4;
function trials_4LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_4 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 15, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stroopcsv.csv',
    seed: undefined, name: 'trials_4'});
  psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
  currentLoop = trials_4;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials_4[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrial_4 = result.value;
    thisScheduler.add(importConditions(trials_4));
    thisScheduler.add(trialStroopRoutineBegin);
    thisScheduler.add(trialStroopRoutineEachFrame);
    thisScheduler.add(trialStroopRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}

var trials_3;
function trials_3LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'math_problems .xlsx',
    seed: undefined, name: 'trials_3'});
  psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
  currentLoop = trials_3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials_3[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrial_3 = result.value;
    thisScheduler.add(importConditions(trials_3));
    thisScheduler.add(MathRoutineBegin);
    thisScheduler.add(MathRoutineEachFrame);
    thisScheduler.add(MathRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 15, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stroopcsv.csv',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrial = result.value;
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(trialStroopRoutineBegin);
    thisScheduler.add(trialStroopRoutineEachFrame);
    thisScheduler.add(trialStroopRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var trialStroopComponents;
function trialStroopRoutineBegin() {
  //------Prepare to start Routine 'trialStroop'-------
  t = 0;
  trialStroopClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  target.setColor(new util.Color(color));
  target.setText(word);
  response.keys = undefined;
  response.rt = undefined;
  // keep track of which components have finished
  trialStroopComponents = [];
  trialStroopComponents.push(target);
  trialStroopComponents.push(response);
  
  trialStroopComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function trialStroopRoutineEachFrame() {
  //------Loop for each frame of Routine 'trialStroop'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialStroopClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *target* updates
  if (t >= 0 && target.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    target.tStart = t;  // (not accounting for frame time here)
    target.frameNStart = frameN;  // exact frame index
    target.setAutoDraw(true);
  }

  
  // *response* updates
  if (t >= 0 && response.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response.tStart = t;  // (not accounting for frame time here)
    response.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { response.clearEvents(); });
  }

  if (response.status === PsychoJS.Status.STARTED) {
    let theseKeys = response.getKeys({keyList: ['j', 'k', 'l'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      response.keys = theseKeys[0].name;  // just the last key pressed
      response.rt = theseKeys[0].rt;
      // was this 'correct'?
      if (response.keys === corrAns) {
          response.corr = 1;
      } else {
          response.corr = 0;
      }
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  trialStroopComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialStroopRoutineEnd() {
  //------Ending Routine 'trialStroop'-------
  trialStroopComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // was no response the correct answer?!
  if (response.keys === undefined) {
    if (['None','none',undefined].includes(corrAns)) {
       response.corr = 1  // correct non-response
    } else {
       response.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('response.keys', response.keys);
  psychoJS.experiment.addData('response.corr', response.corr);
  if (typeof response.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('response.rt', response.rt);
      routineTimer.reset();
      }
  
  response.stop();
  // the Routine "trialStroop" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var stroopBreakComponents;
function stroopBreakRoutineBegin() {
  //------Prepare to start Routine 'stroopBreak'-------
  t = 0;
  stroopBreakClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_9.keys = undefined;
  key_resp_9.rt = undefined;
  // keep track of which components have finished
  stroopBreakComponents = [];
  stroopBreakComponents.push(text_4);
  stroopBreakComponents.push(key_resp_9);
  
  stroopBreakComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function stroopBreakRoutineEachFrame() {
  //------Loop for each frame of Routine 'stroopBreak'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = stroopBreakClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_4* updates
  if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_4.tStart = t;  // (not accounting for frame time here)
    text_4.frameNStart = frameN;  // exact frame index
    text_4.setAutoDraw(true);
  }

  frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text_4.setAutoDraw(false);
  }
  
  // *key_resp_9* updates
  if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_9.tStart = t;  // (not accounting for frame time here)
    key_resp_9.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
  }

  if (key_resp_9.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_9.getKeys({keyList: [], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_9.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_9.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  stroopBreakComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function stroopBreakRoutineEnd() {
  //------Ending Routine 'stroopBreak'-------
  stroopBreakComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
  if (typeof key_resp_9.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
      routineTimer.reset();
      }
  
  key_resp_9.stop();
  // the Routine "stroopBreak" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var instrMathComponents;
function instrMathRoutineBegin() {
  //------Prepare to start Routine 'instrMath'-------
  t = 0;
  instrMathClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_2.keys = undefined;
  key_resp_2.rt = undefined;
  // keep track of which components have finished
  instrMathComponents = [];
  instrMathComponents.push(text_2);
  instrMathComponents.push(key_resp_2);
  
  instrMathComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function instrMathRoutineEachFrame() {
  //------Loop for each frame of Routine 'instrMath'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instrMathClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_2* updates
  if (t >= 0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    text_2.setAutoDraw(true);
  }

  
  // *key_resp_2* updates
  if (t >= 0.5 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_2.getKeys({keyList: ['q'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_2.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  instrMathComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instrMathRoutineEnd() {
  //------Ending Routine 'instrMath'-------
  instrMathComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  key_resp_2.stop();
  // the Routine "instrMath" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var MathComponents;
function MathRoutineBegin() {
  //------Prepare to start Routine 'Math'-------
  t = 0;
  MathClock.reset(); // clock
  frameN = -1;
  routineTimer.add(90.000000);
  // update component parameters for each repeat
  key_Resp.keys = undefined;
  key_Resp.rt = undefined;
  math_problems.setPos([0, 0.2]);
  math_problems.setText(problems);
  // keep track of which components have finished
  MathComponents = [];
  MathComponents.push(text_feedback);
  MathComponents.push(key_Resp);
  MathComponents.push(math_problems);
  
  MathComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function MathRoutineEachFrame() {
  //------Loop for each frame of Routine 'Math'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = MathClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_feedback* updates
  if (t >= 0 && text_feedback.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_feedback.tStart = t;  // (not accounting for frame time here)
    text_feedback.frameNStart = frameN;  // exact frame index
    text_feedback.setAutoDraw(true);
  }

  frameRemains = 0 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text_feedback.setAutoDraw(false);
  }
  
  if (text_feedback.status === PsychoJS.Status.STARTED){ // only update if being drawn
    text_feedback.setText(''.join(key_Resp.keys));
  }
  
  // *key_Resp* updates
  if (t >= 0 && key_Resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_Resp.tStart = t;  // (not accounting for frame time here)
    key_Resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_Resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_Resp.start(); }); // start on screen flip
  }

  frameRemains = 0 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (key_Resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    key_Resp.status = PsychoJS.Status.FINISHED;
  }

  if (key_Resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_Resp.getKeys({keyList: [], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_Resp.keys = [].concat(key_Resp.keys, theseKeys[0].name).filter((i) => i !== undefined);  // storing all keys
      key_Resp.rt = [].concat(key_Resp.rt, theseKeys[0].rt).filter((i) => i !== undefined);
    }
  }
  
  
  // *math_problems* updates
  if (t >= 0 && math_problems.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    math_problems.tStart = t;  // (not accounting for frame time here)
    math_problems.frameNStart = frameN;  // exact frame index
    math_problems.setAutoDraw(true);
  }

  frameRemains = 0 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (math_problems.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    math_problems.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  MathComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function MathRoutineEnd() {
  //------Ending Routine 'Math'-------
  MathComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_Resp.keys', key_Resp.keys);
  if (typeof key_Resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_Resp.rt', key_Resp.rt);
      }
  
  key_Resp.stop();
  return Scheduler.Event.NEXT;
}

var instrReminderComponents;
function instrReminderRoutineBegin() {
  //------Prepare to start Routine 'instrReminder'-------
  t = 0;
  instrReminderClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  instr_resp.keys = undefined;
  instr_resp.rt = undefined;
  // keep track of which components have finished
  instrReminderComponents = [];
  instrReminderComponents.push(text);
  instrReminderComponents.push(instr_resp);
  
  instrReminderComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function instrReminderRoutineEachFrame() {
  //------Loop for each frame of Routine 'instrReminder'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instrReminderClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  
  // *instr_resp* updates
  if (t >= 0.5 && instr_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instr_resp.tStart = t;  // (not accounting for frame time here)
    instr_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { instr_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { instr_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { instr_resp.clearEvents(); });
  }

  if (instr_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = instr_resp.getKeys({keyList: [], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      instr_resp.keys = theseKeys[0].name;  // just the last key pressed
      instr_resp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  instrReminderComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instrReminderRoutineEnd() {
  //------Ending Routine 'instrReminder'-------
  instrReminderComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('instr_resp.keys', instr_resp.keys);
  if (typeof instr_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('instr_resp.rt', instr_resp.rt);
      routineTimer.reset();
      }
  
  instr_resp.stop();
  // the Routine "instrReminder" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var end_messageComponents;
function end_messageRoutineBegin() {
  //------Prepare to start Routine 'end_message'-------
  t = 0;
  end_messageClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_3.keys = undefined;
  key_resp_3.rt = undefined;
  // keep track of which components have finished
  end_messageComponents = [];
  end_messageComponents.push(text_3);
  end_messageComponents.push(key_resp_3);
  
  end_messageComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function end_messageRoutineEachFrame() {
  //------Loop for each frame of Routine 'end_message'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = end_messageClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_3* updates
  if (t >= 0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_3.tStart = t;  // (not accounting for frame time here)
    text_3.frameNStart = frameN;  // exact frame index
    text_3.setAutoDraw(true);
  }

  
  // *key_resp_3* updates
  if (t >= 0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_3.tStart = t;  // (not accounting for frame time here)
    key_resp_3.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
  }

  if (key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_3.getKeys({keyList: [], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_3.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_3.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  end_messageComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function end_messageRoutineEnd() {
  //------Ending Routine 'end_message'-------
  end_messageComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
  if (typeof key_resp_3.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
      routineTimer.reset();
      }
  
  key_resp_3.stop();
  // the Routine "end_message" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
