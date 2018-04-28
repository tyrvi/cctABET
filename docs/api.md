## Course Endpoints

### GET `/courses`
Parameters:

`?user_id` - Optional parameter. Filters courses by user
`?year` - Optional parameter. Filters courses by year
`?semester` - Optional parameter. Filters courses by semester
`?email` - Optional parameter. Filters courses by email

On Success:

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

Parameters:
```
{
    course_id: int
    course_name: string,
    email: optional string,
    semester: string,
    year: int
}
```


### GET `/courses/delete`

`?course_id` - The course id to delete

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

```
 {
    course_name: string,
    email: optional string,
    semester: string,
    year: int
}
```

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

`?user_id` - Optional. Filters users by user_id
`?email` - Optional. Filters users by email


On Success:

```
[
    {
      user_id: int,
      email: string, 
      f_name: string, 
      l_name: string, 
      prefix: string, 
      type: int
    },
    ...
]
```

On Error:

```
{
    error: string
}
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
