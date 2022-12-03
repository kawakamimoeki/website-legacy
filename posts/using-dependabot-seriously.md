---
title: Using Dependabot seriously
date: '2022-10-30'
---

Dependabot was a hoarder.

I have tried various things to make use of Dependabot, and I will summarize them here.

## 1. make time for Dependabot

I decided to work on the Dependabot merge at the beginning of the month.

## 2. automatically set reviewer milestones

If you are set as a reviewer, you have to review.
If you set a milestone with a date, you will be motivated to do it in time. Maybe.

So, I set the following.

| Item      | Value                                         |
| --------- | --------------------------------------------- |
| Reviewer  | All                                           |
| milestone | `security-update-<month>` (8th of each month) |

The most important thing to be aware of is to set the maximum number of reviewers. **We have clearly stated our policy to increase the number of human eyes as much as possible**. However, depending on the nature of the team, it is possible that reviews may be arranged.

Also, it was difficult to set up Github Actions for each repository, so we decided to create one repository for Dependabot countermeasures and set it up from there by hitting the API.

## 3. create a TODO list

I made a TODO list of Dependabot PRs to be worked on for the month in an Issue. This will help us get a better overview and make it easier to look back\*\*.

## 4. Clearly state the rules

We have a set of uniform rules for working on Dependabot as a team.

- Note that Dependabot includes updates to **major versions**.
  - Most libraries have security updates in the latest major version
- Major and minor versions run **tests**.
- Check **release notes** for patched versions
- Keep a **warning list** of any previous updates that have caused problems

## 5. minimize the amount of PR in Dependabot

Libraries related to static site generators were skipped at this time as they are **not subject to user input** and therefore low risk.

---

These were the initiatives. Future issues to be addressed are.

- We would like to change the CI execution depending on the type of version being updated.
- We would like to have an award for a large number of reviews.

I would like to have an award for a lot of reviews. Thank you very much.
