# MIXEET 

##API
###User endpoints ~~~~
####Signing:
`(GET) /users/signin`

####User info:
`(GET) /user/:id`

######Parameters: 

* id [string]

###Collection endpoints ~~~~

####New collection [auth]:
`(POST) /collection`

######Parameters: 

* name [string]

####Collection info [optionally auth]:
`(GET) /collection/:id`

####List collection entries [optionally auth]:
`(GET) /collection/:id/entries`

####Add entry to collection [auth]:
`(POST) /collection/:id/entries`

######Parameters: 

* id [string] ~ collection id
* entry [string] ~ entry id
* api\_reference\_id ~ external api content id
* type [string]

The las 3 parameters are somehow optional, but at least an **entry** OR **api\_reference\_id** + **type** is required.

######Optional parameters: 
* lang [string]

####Remove entry from collection [auth]:
`(GET) /collection/:id/entry/:entry_id/remove`

##CREDITS
###Movies 
[https://www.themoviedb.org]()

Movie info:`http://api.themoviedb.org/3/movie/:id`

Images: `http://image.tmdb.org/t/p/w500/:img_path`