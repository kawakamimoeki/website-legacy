---
title: Google Cloud Error Reporting for error handling
date: '2022-11-01'
---

Error Reporting has recently evolved in many ways and has become a seamless service from notification to logging, so I will summarize the whole picture.

## Send errors to Error Reporting

If you are using GCP infrastructure, it will automatically pick up the errors.
If you are not using GCP infrastructure, check out the various libraries available.

## Manage error status

Error Reporting allows you to manage the status of errors.

- **Unresolved**
- **Confirmed**
- **Resolved**.

and if you want to set it as Confirmed, you can link to **Github Issue etc.** ## Notify via Slack or Email

## Notify errors via Slack or email

Error Reporting supports Slack and email notifications by default.
Notifications are based on the following criteria

- **New errors **occur
- When an error that has been resolved \*\*recurs
- **If you are notified **5 or more times**, you will not be notified of errors for **6 hours\*\*.

So, if you manage your error status properly.

- \*\*Notify only errors that need to be addressed (unknown/recurrent)
- **exclude** notification of errors that do not need to be addressed (in-process/unavoidable)
- **avoid frequent notifications**.

can be achieved.

Also, when combined with **Cloud Logging** (which automatically logs for errors) and **Cloud Monitoring**, you can.

- **notify you as an incident when an error occurs frequently that would not normally require action**.

can also be realized.
**For example, the policy "Too meny timeout" can be used to set up appropriate notifications in cases where timeouts are usually unavoidable and should be ignored, but are worrisome when there are too many of them. **

## Analyze errors

Error Reporting allows you to see a trace. You can analyze various things here.
However, you cannot see the status of the request, so you need to consider a different method.

## Logging errors

Error Reporting information is stored in Cloud Logging at the same time. By syncing this to Cloud Storage, you can store error information permanently.

Translated with www.DeepL.com/Translator (free version)
