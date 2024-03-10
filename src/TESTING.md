# Testing

Return back to the [README.md](README.md) file.

All features of Bakers have been tested through:
- Code validation of HTML, CSS & Python
- Browser compatability in Chrome, Firefox & Opera
- Responsiveness on mobile, tablet and desktop
- Lighthouse
- Defensive programming
-  User stories

## Code Validation

All files in Bakers have been validated through HTML, CSS and Python validators.

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |

### Python

I have used the recommended [PEP8 CI Python Linter](https://pep8ci.herokuapp.com) to validate all of my Python files.

| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |

## Browser Compatibility

I have tested the browser compatability in the three browsers below.

- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Opera](https://www.opera.com/download)

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Add post | Kitchen | Feed | Liked | Bookmarks | Contact Us | Sign out | Sign In | Sign Up | Profile |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chrome | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firefox |  --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Opera | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device |  Add post | Kitchen | Feed | Liked | Bookmarks | Contact Us | Sign out | Sign In | Sign Up | Profile |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tablet (DevTools) | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Desktop |  --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Add post | --- | --- | --- |
| Kitchen | --- | --- | --- |
|  Feed | --- | --- | --- |
| Liked | --- | --- | --- |
| Bookmarks | --- | --- | --- |
| Contact Us | --- | --- | --- |
| Sign out | --- | --- | --- |
| Sign In | --- | --- | --- |
| Sign Up | --- | --- | --- |
| Profile |  --- | --- | --- |


## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Fix | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Add post | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Kitchen | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Feed | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Liked | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Bookmarked | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Contact | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Profile | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Sign out | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Sign in | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Sign up | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |

## User Story Testing

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to __, so that I can __. | ![screenshot](documentation/home.png) |

| As a returning user, I would like to __, so that I can __. | ![screenshot](documentation/home.png) |

| As a site administrator, I should be able to __, so that I can __. | ![screenshot](documentation/admin-editdeletepoem.png) |



## Automated Testing

I have conducted a series of automated tests on my application.

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.

#### Unit Test Issues

## Bugs

-  `'include is not defined'` when trying to runserver.

    ![screenshot](documentation/bug-1.png)

    - To fix this, I made the code shorter and easier for me to comprehend.

      ![screenshot](documentation/bug-1-fix.png)


### GitHub **Issues**

https://github.com/ilswh/bakers/issues

**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](..).

| Bug | Status |
| --- | --- |
| [`include is not defined` when trying to runserver.](https://github.com/ilswh/poetic-society/issues/11) | Closed |

**Open Issues**

Any remaining open issues can be tracked [here](https://github.com/ilswh/poetic-society/issues).

| Bug | Status |
| --- | --- |
| [register.html valdidation failed](https://github.com/ilswh/poetic-society/issues/14) | Open |

## Unfixed Bugs

- Parse error.

    ![screenshot](documentation/css-validation.png)

    - I have not yet attempted to fix this because it is bootstrap.

There are no remaining bugs that I am aware of.