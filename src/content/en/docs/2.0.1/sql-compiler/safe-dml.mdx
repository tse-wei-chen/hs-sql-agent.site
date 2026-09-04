---
title: Safe DML
description: Preview, bind approval, revalidate the row set, and commit only the exact mutation a human approved.
sidebar:
  group: SQL Compiler
  order: 50
---

DML uses a stricter path than query execution because an approval must still describe the same mutation at commit time.

## UPDATE and DELETE

For row-set mutations, hs-sql-agent:

1. Parses, validates, and compiles the mutation.
2. Opens a preview transaction and reads the rows that currently match without executing the mutation.
3. Creates a one-time approval challenge bound to the validated compiled plan, policy version, affected-row count, and row-set fingerprint.
4. Sends MCP `elicitation/create` and requires explicit human approval.
5. After acceptance, validates and consumes the one-time challenge.
6. Opens the commit transaction, re-queries the matched rows, and compares the current fingerprint with the approved one.
7. Executes the exact compiled mutation only if the plan, policy, challenge, row count, and row set still match.

If any bound input changes, the operation is cancelled instead of being committed.

## INSERT VALUES

An INSERT VALUES statement has no pre-existing matched row set. The preview therefore uses the immutable insert payload and binds approval to that exact compiled plan.

## Elicitation is required

`execute_dml_sql` and published DML Custom Tools require form Elicitation support from the MCP client. A client that cannot perform the approval interaction cannot use those mutation paths.

This is intentionally different from a UI-only confirmation dialog: the approval challenge participates in the server-side mutation protocol and is checked again before execution.
