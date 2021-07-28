export default (theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(2),
  },
  box: {
    padding: theme.spacing(4, 5)
  },
  initialTip: {
    padding: theme.spacing(1, 0),
    fontSize: '1.2em'
  },
  formControl: {
    padding: theme.spacing(4, 0),
  },
  formField: {
    width: '100%',
  },
  errorMessage: {
    paddingTop: theme.spacing(1)
  }
});
