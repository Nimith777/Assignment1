import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Homr = () => {
  return (
    <div>
        <Typography variant='h4' style={{color:'red', fontFamily:'fantasy'}}>BLOG FORM</Typography><br/><br/>
        <TextField variant='outlined' label='Enter Blog Name' style={{color:'red', fontFamily:'fantasy'}}>BLOG NAME</TextField><br/><br/>
        <TextField variant='outlined' label='Enter Description' style={{color:'red', fontFamily:'fantasy'}}>DESCRIPTION</TextField><br/><br/>
        <TextField variant='outlined' label='Enter Author Name' style={{color:'red', fontFamily:'fantasy'}}>AUTHOR NAME</TextField><br/><br/>
        <Button variant='contained' style={{fontFamily:'fantasy'}}>ENTER</Button>
    </div>
  )
}

export default Homr