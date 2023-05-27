import type { NextPage } from 'next'
import * as React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Button from '@mui/material/Button';
import variables from '../styles//variables.module.scss';
import Grid from '@mui/material/Grid';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';
import ErrorIcon from '@mui/icons-material/Error';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const PaymentDialog = styled(Dialog)(({ theme }) => ({
   
   '& .MuiCardContent-root': {
    padding:'0'
   },

   '& .MuiPaper-root': {
    borderRadius:'10px',
    background:'#212121',
    padding:'15px 10px'
   },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    border:'none !important',
    minWidth: '250px',
  
  }
}));


function PaymentDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, background:'#151617' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 15,
            top: 15,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
   '& .MuiPaper-root': {
    borderRadius:'20px',
    background:'#151617',
    padding:'15px'
   },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    border:'none !important',
    minWidth: '550px',
  
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, background:'#151617' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 15,
            top: 15,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({

  

  height: 12,
  borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#F3BA2F' : '#F3BA2F',
    },
  }));


  function BonusCardData() {

    
    const data = [
        {
            "bonusCardSmallTitle": "from $30",
            "bonusCardLargeTitle": "100%",
            "activeClass":"1px solid #F3BA2F",
            "marginLeft":"0px"
        },
        {
            "bonusCardSmallTitle": "from $100",
            "bonusCardLargeTitle": "150%",
            "activeClass":"",
            "marginLeft":"10px"
        },
        {
            "bonusCardSmallTitle": "max. $900",
            "bonusCardLargeTitle": "200%",
            "activeClass":"",
            "marginLeft":"10px"
        },
    ]
    const listItems = data.map(
        (element) => {
            return (
              <Card className={styles.bonusCard} style={{border:element.activeClass, marginLeft:element.marginLeft, float:'left'}}>
                <CardContent>
                 <Grid container columns={12}>
                  <Grid item xs={4}><img src='./gift-box.png' /> </Grid>
                  <Grid item xs={8}>
                    <div className={styles.bonusCardSmallTxt}>{element.bonusCardSmallTitle}</div>
                    <div className={styles.bonusCardLargeTxt}>{element.bonusCardLargeTitle} BONUS</div>
                  </Grid>
                 </Grid>
                </CardContent>
              </Card>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}
  
  function DepositBonusData({openPaymentDialog}) {
    // const [openPayment, setPaymentDialog] = React.useState(false);

    // const openPaymentDialog = () => {
    //   setPaymentDialog(true);
    //   };
    //   const closePaymentDialog = () => {
    //     setPaymentDialog(false);
    //   };

    const data = [
        {
            "title": "1st deposit",
            "numeratorVal": "$700.00",
            "denominatorVal": "$1800.00",
            "backroundColor":"linear-gradient(171.43deg, #924FE7 6.25%, #6725BB 95.35%)",
            "progressVal":31,
            "btnTxt": "Claim",
            "isDisabled":true,
            "opacity":'1'
        },
        {
            "title": "2nd deposit",
            "numeratorVal": "$0.00",
            "denominatorVal": "$4100.00",
            "backroundColor":"linear-gradient(171.43deg, #5681EE 6.25%, #163993 95.35%)",
            "progressVal":0,
            "btnTxt": "deposit",
            "isDisabled":false,
            "opacity":'1'
        },
        {
            "title": "3rd deposit",
            "numeratorVal": "$0.00",
            "denominatorVal": "$0.00",
            "backroundColor":"linear-gradient(169.49deg, #1DC57C -3.51%, #145934 94.56%)",
            "progressVal":0,
            "btnTxt": "deposit",
            "isDisabled":true,
            "opacity":'0.5'
        },
        {
            "title": "4th deposit",
            "numeratorVal": "$0.00",
            "denominatorVal": "$0.00",
            "backroundColor":"linear-gradient(351.88deg, #AA0508 3.93%, #F33A3D 92.07%)",
            "progressVal":0,
            "btnTxt": "deposit",
            "isDisabled":true,
            "opacity":'0.5'
        },
    ]
    const listItems = data.map(
        (element) => {
            return (
              <Card sx={{ maxWidth: 515 }} className={styles.depositrCard} style={{background:element.backroundColor, opacity:element.opacity}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'bold'}}>
                    {element.title}
                  </Typography>
                  <Grid container columns={12}>
                    <Grid item xs={8} style={{marginRight:'30px'}}>
                      <div>
                        <div style={{marginBottom:'5px'}}><span>Bonus amount: </span><span style={{fontWeight:'bolder', color:'#F3BA2F'}}> {element.numeratorVal} / {element.denominatorVal}</span></div>
                        <BorderLinearProgress variant="determinate" value={element.progressVal} />
                      </div>
                    </Grid>
                    <Grid item xs={3}> 
                      <Button size='large' disabled={element.isDisabled} fullWidth={true} onClick={openPaymentDialog} variant="contained" className={styles.claimBtn}>{element.btnTxt}
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}

const Home: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const [isDetailView, setIsDetailView] = React.useState(false);

   const [openPayment, setPaymentDialog] = React.useState(false);

    const openPaymentDialog = () => {
      setPaymentDialog(true);
      };
      const closePaymentDialog = () => {
        setPaymentDialog(false);
      };
  
  const handleDetailView = (val)  => {
    setIsDetailView(val);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 

  const [currency, setCurrency] = React.useState('EUR');

  const changeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <Grid container columns={12}>
              <Grid item xs={6}>
                <p className={styles.cardTitle }>RACK BACK</p>
              </Grid>
              <Grid item xs={6}>
              <RocketLaunchIcon color="primary"  sx={{ fontSize: 80 }} />
              </Grid>
            </Grid>
          </a>
          
          <a href="#" className={styles.card}>
            <Grid container columns={12}>
              <Grid item xs={6}>
                <p className={styles.cardTitle }>CASH BACK</p>
              </Grid>
              <Grid item xs={6}>
              <CurrencyExchangeIcon color="primary"  sx={{ fontSize: 80 }} />
              </Grid>
            </Grid>
          </a>
          
          </div>
          <div className={styles.grid}>
          <a
            href="#"
            className={styles.card} style={{width:'82% !important'}}
          >
            <Grid container columns={12}>
              <Grid item xs={8} style={{marginTop:'4% !important'}} onClick={handleClickOpen}>
                <p className={styles.cardTitle }>DEPOSIT <span style={{color:'#eabc4e'}}>BONUS</span></p>
              </Grid>
              <Grid item xs={4}>
              <CardGiftcardIcon color="primary"  sx={{ fontSize: 80 }} />
              </Grid>
            </Grid>
          </a>
        </div>
        <div className={styles.grid}>
        <Grid container columns={12} pl={3}>
        <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon sx={{ fontSize: 40 }} color='primary' />
              </ListItemIcon>
              <ListItemText className={styles.listItem}>Favourites</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <HistoryIcon sx={{ fontSize: 40 }} color='primary' />
              </ListItemIcon>
              <ListItemText >Recent</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        </Grid>

        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Slide}
      >
        
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <span className={styles.depositTitle}>  {isDetailView ? <span style={{cursor:'pointer'}} onClick={() => handleDetailView(false)}>&lt;</span> : '' } Deposit Bonus</span>
        </BootstrapDialogTitle>
        {!isDetailView ? <div className={styles.detailLink} onClick={() => handleDetailView(true)}>Details &#62;</div> : ''}
        <DialogContent dividers style={{ background:'#151617'}}>
        {isDetailView
        ? 
          <Typography gutterBottom  className={styles.detailTxt}>
            <strong>Up to 270% Guaranteed Welcome Bonus </strong> With Your First 4 Deposits | No Betting Limits, Wagering with deposit Funds!
            <ul>
              <li>1st deposit max. $900 up to 200% real money bonus</li>
              <li>2nd deposit max. $2.100 up to 210%real money bonus</li>
              <li>3rd deposit max. $4.300 up to 220% real money bonus</li>
              <li>4th deposit max. $7.700 up to 270% real money bonus</li>
            </ul>
            <p>
            The Bonus money is guaranteed to be transferred as real money after the wagering requirement is met. Deposit $30 or more for each stage to claim.</p>
            <p>
              Wagering with deposit funds only, multiple deposits are allowed. No bet limits. Bonus percentage and max. deposit amount increases after each of the first 4 deposits, max. $15.000. </p>
            <p>The sum of the first 4 deposits is the base for the total welcome bonus amount. Wager the sum to receive the accrued bonus in cash with no extra conditions attached. Unlimited cash deposits are allowed to complete the wagering requirement. </p>
            <p>The deposit balance and any winnings from your deposits can be withdrawn at any time after your deposits have been wagered at least once (wager x1). Bonus stays active even once a withdrawal is submitted.</p>
            <p>No expiry on the bonus funds, every deposit and gameplay will contribute to the wagering until it is completed, even after the 4th deposit!</p>
            
          </Typography> 
          :
          <DepositBonusData openPaymentDialog={openPaymentDialog} />
            }
          
        </DialogContent>
      </BootstrapDialog>

      <PaymentDialog
        onClose={closePaymentDialog}
        aria-labelledby="customized-dialog-title"
        open={openPayment}
        TransitionComponent={Slide}
      >
        
        <PaymentDialogTitle id="customized-dialog-title" onClose={closePaymentDialog}>
          <span className={styles.depositTitle}>  {isDetailView ? <span style={{cursor:'pointer'}} onClick={() => handleDetailView(false)}>&lt;</span> : '' } Select amount</span>
        </PaymentDialogTitle>
        {!isDetailView ? <div className={styles.detailLink}>Next step: Payment method</div> : ''}
        <DialogContent dividers>
        
          <TextField className={styles.amount}  value={30} fullWidth  variant="outlined" />
          <div className={styles.currencySel}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Eur"
              onChange={changeCurrency}
            >
              <MenuItem value="EUR">EUR</MenuItem>
            </Select>
          </div>

          <Grid container columns={12} pt={3}>
              <Grid item xs={6}>
              <Chip label="1st" className={styles.tag} variant="filled" />
              <span className={styles.depositTxt}>Deposit</span>
              <span className={styles.depositTxt} style={{paddingTop:'10px', display:'inline-block'}}><ErrorIcon sx={{ fontSize: 20, color:'orange' }} /></span>
              </Grid>
              <Grid item xs={6}>
                <div style={{float:'right'}}>
                <span className={styles.bonusToggle}>Use Bonus</span>
                <span><Switch defaultChecked color="success" /></span>
                </div>
              </Grid>
          </Grid>
          <Grid container columns={12} pt={3}>
              <BonusCardData />
          </Grid>

          <Grid container columns={12} pt={3}>
            <Button sx={{ width: '100%',borderRadius:'10px',lineHeight:'44px', fontWeight:'bold' }} variant="contained" color='error' size="large">
              Deposit Now
          </Button>
          </Grid>

          <Grid container columns={12} pt={3}>
            <div style={{fontWeight: '700', marginLeft:'25%', fontSize:'16px', lineHeight: '24px', color: '#FFFFFF', opacity: '0.4'}}>Have a promo code? <span style={{color:'#F3302A', cursor:'pointer'}}>click here</span></div>
          </Grid>
          <Grid container columns={12} pt={3}>
            <img src='./icons.png' />
          </Grid>
          
        </DialogContent>
      </PaymentDialog>

        </div>
      </main>
      
    </div>
  )
}

export default Home
