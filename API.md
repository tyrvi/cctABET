## Course Endpoints

### GET `/courses`
`?email` - Optional parameter. Filters courses by user

Returns 
```
[
  {
    course_id: int,
    course_name: string,
    semester: string,
    year: int,
    forms: [
      {
        form_id: int,
        outcome: string,
      },
      ...
    ]
  },
  ...
]
```

On error:
```
{
  error: string
}
```

### POST `/courses/update`
???


### GET `/courses/delete`

`?course` - The course id to delete

On success:

```
{
  message: string
}
```

On error:

```
{
  error: string
}
```


### POST `/courses/create`
`?name` - The name of the new course

`?email` - Optional. The email of the professor

`?semester` - The semester this course is

`?year` - The year the course is

On success:

```
{
  message: string
}
```

On error:

```
{
  error: string
}
```

## User Endpoints

### GET `/users`

`?email` - Optional. Filters users by email

Returns if `?email is set`:

```
{
  username: string,
  email: string,
  type: int
}
```

Otherwise returns:

```
[
  {
    username: string,
    email: string,
    type: int
  },
  ...
]
```

On error:

```
{
  error: string
}
```

### POST `/users/update`
???

### POST `/users/create`

`?user` - The username
    
`?pass` - The password

`?email` - The email of the user

`?type` - The type of the user

On success:

```
{
  message: string
}
```

On error:

```
{
  error: string
}
```

### GET `/users/delete`

?email - The user to delete

On success:

```
{
  message: string
}
```

On error:

```
{
  error: string
}
```

## Forms

### GET `/forms`

`?form` - The form to get

Returns:
```
{
  form_id: int
  outcome: string
  data: object
}
```

On error:

```
{
  error: string
}
```

### POST `/forms/update`
???

### GET `/forms/delete`

`?form` - The form id to delete

On success:

```
{
  message: string
}
```

On error:

```
{
  error: string
}
```

### POST `/forms/create`
`?course` - The course id that owns this form

`?outcome` - Optional. The outcome of this form

`body.data` - The json data associated with the form

On success:

```
{
  message: string
}
```

On error:

```
{
  error: string
}
```
