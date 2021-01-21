const inputValidate = {
    name :{required: 'Name is required' , minLength:{value:1 , message: 'Name must be at least 6 character.' }},
    detail:{required: 'Detail is required' , minLength:{value:1 , message: 'Detail must be at least 10 character.' }}
}

export default inputValidate;