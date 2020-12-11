# Traveling Indonesia

![Application Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat) [![Application Demo](https://img.shields.io/badge/demo-online-green?style=flat)](https://travelingindonesia.herokuapp.com/) 

An open-source database of Indonesian Tour Destination. We provides free JSON API for anyone to use it.

---

## Table of Content
* [General info](#general-information)
* [Features](#features)
* [Documentation](#documentation)
  * [Quick Start](#quick-start)
  * [Get Destinations](#get-destinations)
  * [Search Destination](#search-destinations)
  * [Get Destination Reviews](#get-destination-reviews) 
* [Technologies](#technologies)
* [Configure](#configure)
* [Tools](#tools)
* [Get in Touch](#get-in-touch)

---

## General information

Traveling Indonesia is an Unofficial Open Source web application that provide tour destination in Indonesia. All the data we have is the result of scrapping from Wikipedia. Want to see the scrapper I use? Feel free to see [my scrapper](https://github.com/nurmuhamadas/traveling-indenesia-scrapper).

## Features
- Get all list of tour destination in Indonesia
- Get destination information by Id
- Search destination by name, location, category, and rating
- Support for pagination by default
- Get, post, edit, and delete review
- Offline capability
- [Play ground](https://travelingindonesia.herokuapp.com/docs/play-ground) page, simple tool to automatically generate endpoint.

### Demo

Visit Traveling Indonesia page to see documentation and look at how the data is provided. [https://travelingindonesia.herokuapp.com/](https://travelingindonesia.herokuapp.com/)

---

## Documentation

### Quick start

This section we will learn how to get our first data list of Indonesian tour destinations. It example gives us the first 20 lists of data that are in our database. To get more detail about API endpoint, params, and others, see our API documentation at [API Documentation](https://travelingindonesia.herokuapp.com/docs/).

To get our first data, we can create `GET` request by using url below:

```
https://travelingindonesia.herokuapp.com/api/v1/destinations
```
<br />

### Get Destinations
#### Get all data

To get all list data, we can make a `GET` request by url below

```
https://travelingindonesia.herokuapp.com/api/v1/destinations
```

For performance reasons, by default, it will return 20 list data only. We can custom the limit data by passing the limit query (we will talking about it below). In other hand, by 'limit' the result, our API is support fo pagination by default.

#### Get data by id

We can get a destination data with specified id.
```
https://travelingindonesia.herokuapp.com/api/v1/destinations/:id
```

Note that we can pass :id param with id or _id value. Both of them will return same data.

##### Example
```
https://travelingindonesia.herokuapp.com/api/v1/destinations/1
```
or
```
https://travelingindonesia.herokuapp.com/api/v1/destinations/5fc1a02191ce582470a4793e
```
Two urls above will return same data.

#### Sort data
By default, all request will return list data sorted by id. We can change the order of the data by passing 'sort' query. Here's a list of possible values ​​for the query sort:

| Value | Description |
| -------- | ----------- |
| Name | Sort return data by name |
| Rating | Sort return data by rating |
| City | Sort return data by city name |
| Region | Sort return data by province name |

##### Example:
```
https://travelingindonesia.herokuapp.com/api/v1/destinations/?sort=name
```

If we want to revese the order, we can pass `desc=true` in the end of url.

##### Example:
```
https://travelingindonesia.herokuapp.com/api/v1/destinations/?sort=name&desc=true
```

#### Limit data

As mentioned above, we can set the limit of data by passinglimit query with any value from 0 to maximum amount of data (682 data). If we don't set limit value, return data will be limited to 20 list data for performance reasons.

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/?limit=2
```

If we want to get All data, we can set `limit=0` in the request url.

#### Pagination

Until here, we just get the first limited data. How we can get the next data? It's simple way to get it. We can addpage=valueto skip to next data. Default value of page is 0. It means API will skip 0 data

##### Example

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/?page=1
```

#### Additional

We can use all query above in one url request. In example, we want to get the third five data that ordered by name, we can get request with:

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/?sort=name&page=2&limit=5
```

---

### Search Destinations

#### Search Destinations

To search specified list data, we can make a GET request based on url below

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/search
```

Unfortunately, if we make GET request with url above, we will get an error that ask us to give required queries. Yeah, to search data, we need to pass the url at least with a query below

| Query |	Value |	Description |
| ------- | ------- | ------- |
| name | 0-9 \| a-z |	Search for data by a specific name. |
| location | a-z | Search for data by a specific location. Data result fits in with village, district, city, or province name. |
| categories | alam \| religi \| budaya \| sejarah \| modern \| lainnya |	Search for data by available category. |
| rating | 0-5 | Search for data that has a rating greater than equal to the given value. |

##### Example:

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/search?name=ina
```

If we want to get destinations by specified location, we can make GET request with url below:

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/search?location=ban
```

#### Additional

We can search data with all query above in one url request. In other hand, we can also use all query at get destination page if it neccessary.

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/search?name=c&location=jakarta&categories=modern&sort=name&page=2&limit=2
```

---

### Get Destination Reviews

#### Get Review by Destination Id

To get specified review data, we can make a `GET` request based on url below

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/review/:id
```

Note that :id param is _id value. We can't pass id value because it will return error.

#### Add a review

We can add a review to specified destination review by make `POST` request to url below.

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/review/:id
```

To create a `POST` request, we need to include all required data below into you body request.

| Key |	Value |	Description |
| --- | --- | --- |
| name | `string` & at least 3 letters | Name value must be string with minimum length is 3 letters. |
| rating | `number` & 0-5 |	Rating value must be a number and between 0 to 5. |
| comment |	string | Comment value must be string. |

##### Example:

Endpoint
```
https://travelingindonesia.herokuapp.com/api/v1/destinations/review/5fc1a02191ce582470a4793e
```

Body request
```json
{
  name: 'jhon',
  rating: 5,
  comment: 'Beautiful place ever!',
}
```

#### Edit a review

We can edit a review to specified destination review by make `PUT` request to url below.

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/review/:id/:review_id
```

To create a `PUT` request, we need to include all required data above into you body request even though we only want to change one value.

##### Example:

Endpoint
```
https://travelingindonesia.herokuapp.com/api/v1/destinations/review/5fc1a02191ce582470a4793e/5fc710a8c6ea589856bc5583
```

Body request
```json
{
  name: 'jhon',
  rating: 5,
  comment: 'Beautiful place ever!',
}
```

#### Delete a review

We can delete a review to specified destination review by make `DELETE` request to url below.

```
https://travelingindonesia.herokuapp.com/api/v1/destinations/review/:id/:review_id
```

To create a `DELETE` request, we don't need to include body request.

##### Example:

Endpoint
```
https://travelingindonesia.herokuapp.com/api/v1/destinations/review/5fc1a02191ce582470a4793e/5
```

###

---

## Contributing

Please read contributing file [here](https://github.com/nurmuhamadas/traveling-indonesia-api/blob/master/contributing.md)

---

## Get in touch

- WhatsApp : [+62 85780966635](https://wa.me/6285655350504) (fast response)
- Instagram : [@nurmuhamadas](https://instagram.com/nurmuhamadas)
- Email : [nurmuhamad.a.13@gmail.com](mailto:nurmuhamad.a.13@gmail.com)

---

## License
>You can check out the full license [here](https://github.com/nurmuhamadas/traveling-indonesia-api/blob/master/LICENSE)

This project is licensed under the terms of the **MIT** license.

---

###### tags: `API` `JSON` `MERN` `NODEJS` `NextJs` `MongoDB` `ReactJs` `ExpressJs`