import React from 'react';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Textbox() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="Size"
          id="outlined-size-normal"
          defaultValue="Normal"
          variant="outlined"
        />
      </div>
    </form>
  );
}
