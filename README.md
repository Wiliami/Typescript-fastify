# Typescript + fastify 🎬🔨💡
 
Project created with task in side server as nodejs, typescript and fastify 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

The things you need before installing the software.

* You need this
* And you need this
* Oh, and don't forget this

### Installation

A step by step guide that will tell you how to get the development environment up and running.

```
$ npm install
$ npm run dev
```

## Usage

A few examples of useful commands and/or tasks.

```
$ npm install
$ npm run dev
```

## Deployment

Additional notes on how to deploy this on a live or release system. Explaining the most important branches, what pipelines they trigger and how to update the database (if anything special).

### Server

* Live:
* Release:
* Development:

### Members

* Administrator
* Membership
* Billing
* Anonymous

## Permissions table

|   | Administrator | Membership | Billing | Anonymous
|-- | --------------| ---------- | ------- | ---------
| Create users | ✅ | ✅ | ✅ | ❌ |
| Update users | ✅ | ✅ | ❌ | ❌ |
| List users | ✅ | ✅ | ✅ | ❌ |
| Delete users | ✅ | ❌ | ❌ | ❌ |
| Create products | ✅ | ❌ | ❌ | ❌ |
| List products   | ✅ | ✅ | ✅ | ✅ |
| Update products | ✅ | ❌ | ❌ | ❌ | 
| Delete products | ✅ | ⚠️ | ❌ | ❌ |
| Get billing details | ✅ | ❌ | ✅ | ❌ | 
| Export billing details | ✅ | ❌ | ✅ | ❌ |

> ✅=allowed ❌=not allowed ⚠️=allowed w/ conditions

### Conditions

* Only owners may delete your products
