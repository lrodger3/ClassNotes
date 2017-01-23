# MongoDB
> HuMONGOus Database

## Understanding Databases
- Have to be fast and efficient for storing any amount of data
- Should make it easy to add data as well as retrieve / update it

## SQL vs NoSQL
> Structured Query Language

Relational DB's are typically interacted with using SQL
'SELECT Name,Email FROM Users'
'DROP TABLE Users'

Non-Relational DB's use their own query structures
In MongoDB's case, we query using JSON-like objects

### SQL
- Data is stored in a flat tabular system (tables)
- Much like spreadsheets
- Very structured - you must define your schema
- Scale Vertically by increasing the power of a single server
  - Isn't very cost effective
- MySQL, PostgreSQL, Oracle

### NoSQL
- Developed to overcome the limitations of SQL DB's concerning scale / replication
- Structure-less
  - Document-based (mogodb)
  - key-value (redis)
  - graph databases (neo4j)

- Ability to have dynamic data
- Scale Horizontally
  - Distributed among many servers
  - MUCH cheaper than vertical scaling
    - 100 crappy machines vs 1 super amazing machine
- Faster than SQL because of their flat structure and weak associations

## huMONGOus DB (mongoDB) - what is it?
- Written in C++, very fast, document-oriented storage
- Built in support for scaling (clustering / sharding)
- Flat-file database
  - All your data for a database is stored in a single file
- Documents are stored as JSON-like object (B (BINARY) SON)

## Organization
- Database 
  - highest level of organization
  - Hold a number of `Collections`
- Collection
  - next level of organization
  - Like arrays
  - hold a number of `Documents`
- Documents
  - lowest level of organization
  - Like objects
  - hold a number of `key:value` pairs
  - All documents get an `_id` property that has a UNIQUE value

EX :
- OvenResale - DB
  - Users - Collection
    - {name : 'bill', customer : true} - Document
  
  - Ovens - Collection
    - {manufacturer : 'GE', year : 1977} - Document
  
  - Orders - Collection
    - {total : 104.70, items : 4} - Document

Analogy to SQL
DB             - Series of Tables
Collection     - Table
Document       - Row
Document Props - Column


## After Installation

1. `sudo mkdir -p /data/db` - Run ONCE
  - Makes the /data/db directory on your machine, it is where MongoDB looks to store information by default

2. `sudo mongod` - Needs to be running to do ANYTHING with your DB's
  - Starts a mongodb server listening on port 27017
  - often already started in the background on Linux Distros
  
3. `mongo` - Run whenever you need to get into the shell
  - Takes you into the `mongo shell` where you can interact with your DB's through the command line

## Mongo Shell
> Different environment from your normal bash terminal!  That means that the commands you will run are very different

### Common Commands
- `show dbs` - shows us the databases created on this system
- `show collections` - shows us the collections in the last `used` database
- `use <DBNAME>` - Select a Database for context of other commands.  When you _use_ a database, it becomes the _active_ database for your mongo shell commmands.  It will not create the DB you use until it has data inserted into it

`db.<COLLECTION>.insert()` - A method used for inserting a `DOCUMENT` into a `COLLECTION`

`db.<COLLECTION>.find().pretty()` - A method used for retrieving documents from a collection

`db.<COLLECTION>.update()` - Method used for querying documents and then updating them
  - Might want to use the `$set` operator with this one!

`db.<COLLECTION>.remove()` - Takes a query and removes a document that matches that query

### Operator Examples
`$set`
`$gt`
`$lte`
`$ne`
