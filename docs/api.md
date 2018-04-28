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

### POST `/users/update`
Parameters:
```
{
    user_id: int,
    email: string,
    password: optional string,
    f_name: string,
    l_name: string,
    prefix: string,
    type: int
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

### POST `/users/create`

Parameters:

```
{
    email: string,
    password: string,
    f_name: optional string,
    l_name: optional string,
    prefix: optional string,
    type: int
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

`?form_id` - Optional. The form to get

On success:
```
{
    form_id: int,
    course_id: int,
    outcome: string,
    completed: int,
    data: json
}
```

On error:

```
{
  error: string
}
```

### POST `/forms/update`
Parameters:
```
{
    form_id: integer
    course_id: integer,
    outcome: optional string,
    completed: int,
    data: object
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

### GET `/forms/delete`

`?form_id` - The form id to delete

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
Parameters:
```
{
    course_id: int,
    outcome: optional string,
    completed: optional int,
    data: optional object
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

### POST `/forms/massupdate`
Parameters:
```
[
    {
        form_id: string null if you want to create this form
        course_id: int,
        outcome: optional string,
        completed: optional int,
        data: optional object
    },
    ...
]
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

## Files

### GET `/files`

`?form_id` - The file associated with a form

On success:
```
{
    file_id: int,
    file_name: string,
    original_file_name: string,
    form_id: int
}
```

On error:
```
{
    error: string
}
```

### GET `/files/download`

`?form_id` - The form associated with the file

On success: Downloads file

On error:
```
{
    error: string
}
```

### GET `/files/delete`

`?form_id` - The form associated with the file

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

### POST `/files/upload`

`?form_id` - The form associated with this file

## Admin Endpoints

### GET `/admin/create_db`

`?db` - The name of the database to create

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
### GET `/admin/insert_test_data`

`?db` - The name of the database to insert test data into

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

