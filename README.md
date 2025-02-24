# Next.js 15 - useState Hook Error in Page Component

This repository demonstrates a common error encountered in Next.js 15 applications when using the `useState` hook within a page component. The error arises from attempting to use `useState` outside of a functional component and improper use of the `useEffect` hook.

## Problem

The `about.js` file contains the problematic code.  The `useState` hook is used directly, causing an error because it's not within a functional component, and the `useEffect` hook isn't correctly managed for cleanup.

## Solution

The solution is provided in `aboutSolution.js`. This corrected code ensures `useState` is used properly within a functional component and utilizes the `useEffect` hook to manage and clean up interval functions appropriately.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Navigate to `/about` and observe the error (in the original `about.js`)
6. Switch to `aboutSolution.js` to observe the fix.
