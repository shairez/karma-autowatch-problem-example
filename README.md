# karma-autowatch-problem-example
This project was created to simulate a problem with karma autowatch and glob matchers

## The problem

When we configure `karma.conf.js` with something like `src/app/**/*.js` the autowatch stop reporting the correct results.


## steps to reproduce the problem

1. `karma start`
2. Verify that you see the `Executed 1 of 1 SUCCESS` message
3. Go to `registration.component.spec.js`
4. On line 25 change `ctrl.createAccount()` to `ctrl.createAccount2()`
5. You should see a failing test message in the karma report, but you see the same `SUCCESS` message from before 

## It is solved when you change the glob matcher

I managed to find out that it's got to do with the *glob selector* in the files configuration in `karma.conf.js`.

1. Go to `karma.conf.js`, 
2. Comment line 12 where it says `'src/app/**/*.js'`
3. Uncomment line 13 where it says `'src/app/**/*.{component,service}.js'`
4. You should now see the autoWatch works correctly

## Bottom line

Something with `'src/app/**/*.js'` breaks the autoWatch behavior
