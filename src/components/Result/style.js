export default (theme) => ({
  result: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(4),
    textAlign: 'left',
    maxWidth: '50%',
    '& p': {
      margin: 0,
      paddingTop: theme.spacing(2),
    },
    '& ul': {
      listStyleType: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%',
    },
  },
  email: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  password: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  copyIcon: {
    cursor: 'pointer',
    paddingLeft: theme.spacing(1)
  },
  feedback: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  success: {
    borderColor: '#4caf50 !important',
    backgroundColor: '#4caf50 !important',
  },
  silver: {
    color: '#7d8288',
  },
  gold: {
    color: '#9f8d58',
  },
});
