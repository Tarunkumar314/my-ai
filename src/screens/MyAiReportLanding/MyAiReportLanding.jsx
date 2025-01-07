import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useRef } from 'react';
import { handleSendMail } from "../../utils/sendMail.js";
import PaypalButton from "./paypalFunctionality.jsx";
import { DrawerAppBar } from "./navbar.jsx";

export const MyAiReportLanding = () => {
  const [contactInfo, setContactInfo] = React.useState({});
  const contactUsRef = useRef(null);

  const scrollToContactUs = () => {
    contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <Box sx={{ backgroundColor: "white" }}>
      <DrawerAppBar scrollToContactUs={scrollToContactUs} />
      <Box
        sx={{
          backgroundColor: "#168118",
          py: 10,
          display: "flex",
          justifyContent: "center",
          // paddingLeft: "125px", // Add this line for left padding
        }}
      >
        <Container maxWidth="xl"
        >
          <Grid container spacing={4}

          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                color="white"
                gutterBottom
                sx={{
                  color: "#FFF",
                  fontFamily: "Inter",
                  fontSize: 56,
                  fontStyle: "normal",
                  fontWeight: 900,
                  lineHeight: "var(--Line-height-display-xl, 80px)",
                  letterSpacing: -1.12,
                  wordWrap: "break-word",
                }}
              >
                Know Your Stock/Mutual Fund/ETF with AI-Generated Reports
              </Typography>
              <Typography variant="h6" color="#e9d7fe" gutterBottom>
                We save time. We provide 100+ data from many sources. See our
                sample reports. <br />
                <br />
                Get all the critical insights in one place for just $6 per
                report.
              </Typography>

              <Box sx={{
                display: "flex",
                flexDirection: {
                  xs: 'column',
                  sm: 'row'
                },
                gap: 2,
                mt: 4
              }}>
                <Button
                  href="../sample_report.pdf"
                  download="sample_report.pdf"
                  variant="contained"
                  color="primary"
                  sx={{
                    display: "flex",
                    padding: "var(--spacing-xl, 1px) 15px 4px 15px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "var(--radius-lg, 10px)",
                    // border: "1px solid #D0D5DD",
                    background: "#FFF",
                    color: "#344054", // Default text color
                    boxShadow:
                      "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(16, 24, 40, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(16, 24, 40, 0.05)) inset, 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(16, 24, 40, 0.05))",
                    fontFamily: "'Fold Grotesque Pro', sans-serif", // Correctly applied font
                    fontSize: "var(--Font-size-text-lg, 15px)", // Text size
                    fontStyle: "normal",
                    fontWeight: 850,
                    lineHeight: "var(--Line-height-text-lg, 28px)", // Line height
                    "&:hover": {
                      background: "primary", // Optional: Change background on hover
                      color: "#FFF", // Change text color to white on hover
                    },
                  }}
                >
                  Sample Report #1
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    display: "flex",
                    padding: "var(--spacing-xl, 1px) 15px 4px 15px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "var(--radius-lg, 10px)",
                    // border: "1px solid #D0D5DD",
                    background: "#FFF",
                    color: "#344054", // Default text color
                    boxShadow:
                      "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(16, 24, 40, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(16, 24, 40, 0.05)) inset, 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(16, 24, 40, 0.05))",
                    fontFamily: "'Fold Grotesque Pro', sans-serif", // Correctly applied font
                    fontSize: "var(--Font-size-text-lg, 15px)", // Text size
                    fontStyle: "normal",
                    fontWeight: 850,
                    lineHeight: "var(--Line-height-text-lg, 28px)", // Line height
                    "&:hover": {
                      background: "primary", // Optional: Change background on hover
                      color: "#FFF", // Change text color to white on hover
                    },
                  }}
                >
                  Sample Report #2
                </Button>
                <PaypalButton />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image="https://c.animaapp.com/TYQOTS8E/img/frame-2.png"
                alt="AI Report"
                sx={{ borderRadius: 4, height: 560 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "#101828",
            fontFamily: "Fold Grotesque Pro",
            fontSize: "var(--Font-size-display-md, 36px)",
            fontWeight: 850,
            lineHeight: "var(--Line-height-display-md, 44px)",
            letterSpacing: "-0.72px",
          }}
        >
          Each Report Contains
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          We help in making bigger gains or reduce losses with right data.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              title: "Fundamental Analysis",
              description:
                "Dive into a company’s financial health, performance, and potential to make informed decisions.",
              img: "https://c.animaapp.com/TYQOTS8E/img/featured-icon.svg",
            },
            {
              title: "Technical Analysis",
              description:
                "Analyze market indicators like RSI, MACD, and Bollinger Bands to identify stock trends and make informed trading decisions.",
              img: "https://c.animaapp.com/TYQOTS8E/img/featured-icon-1.svg",
            },
            {
              title: "Earnings Summary",
              description:
                "Stay updated with concise summaries of the latest earnings reports and call details without attending a call.",
              img: "https://c.animaapp.com/TYQOTS8E/img/featured-icon-2.svg",
            },
            {
              title: "Stock Insights",
              description:
                "Discover 5 essential factors about a stock before deciding to buy or sell.",
              img: "https://c.animaapp.com/TYQOTS8E/img/featured-icon-3.svg",
            },
            {
              title: "Market Recommendations",
              description:
                "Benefit from expert opinions and cost insights provided by top analysts and institutions.",
              img: "https://c.animaapp.com/TYQOTS8E/img/featured-icon-4.svg",
            },
            {
              title: "Research Links",
              description:
                "Save time with access to 10+ research links and their key takeaways, all in one place.",
              img: "https://c.animaapp.com/TYQOTS8E/img/featured-icon-5.svg",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ p: 2, backgroundColor: "gray.50" }}>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  sx={{ width: 52, height: 52, ml: 2.3 }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="primary"
                    gutterBottom
                    sx={{
                      display: "flex",
                      minWidth: "280px",
                      padding: "var(--spacing-3xl, 24px)",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "32px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      borderRadius: "12px",
                      background: "#F9FAFB",
                      color: "#168118",
                      fontFamily: "Fold Grotesque Pro",
                      fontSize: "var(--Font-size-text-xl, 20px)",
                      fontWeight: 850,
                      lineHeight: "var(--Line-height-text-xl, 30px)",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        {(() => {
          const mainTopicStyles = {
            alignSelf: "stretch",
            color: "#101828",
            textAlign: "center",
            fontFamily: "Fold Grotesque Pro",
            fontSize: "var(--Font-size-display-md, 36px)",
            fontStyle: "normal",
            fontWeight: 850,
            lineHeight: "var(--Line-height-display-md, 44px)",
            letterSpacing: "-0.72px",
          };

          const sectionTitleStyles = {
            textAlign: "center",
            color: "#344767",
            fontWeight: 700,
            mb: 2,
          };

          const descriptionStyles = {
            textAlign: "center",
            color: "textSecondary",
            mb: 6,
          };

          return (
            <>
              {/* Why Us Section */}
              <Typography variant="h4" gutterBottom sx={mainTopicStyles}>
                Why Us?
              </Typography>
              <Typography variant="h6" sx={descriptionStyles}>
                We help in making bigger gains or reduce losses.
              </Typography>
              <Grid container spacing={4} sx={{ mb: 8 }}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" gutterBottom sx={mainTopicStyles}>
                    Low Cost
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    You could be making much more profit or saving much more in
                    losses with the right information in the report. Data in the
                    report is everything.
                  </Typography>
                  <List>
                    {[
                      "Maximize profits and minimize losses with accurate information.",
                      "Data in the report is crucial for informed decisions.",
                      "Affordable insights compared to traditional methods.",
                      "Value-driven solutions for every investor.",
                      "Get a report for every holding in your portfolio.",
                    ].map((text, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    image="https://c.animaapp.com/TYQOTS8E/img/screen-mockup--replace-fill-.png"
                    alt="Mockup"
                    sx={{ borderRadius: 4, height: 512 }}
                  />
                </Grid>
              </Grid>

              {/* Saving Time Section */}
              <Grid container spacing={4} sx={{ mb: 8 }}>
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    image="https://c.animaapp.com/TYQOTS8E/img/screen-mockup--replace-fill--1.png"
                    alt="Mockup"
                    sx={{ borderRadius: 4, height: 512 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" gutterBottom sx={sectionTitleStyles}>
                    Saving Time For You
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    No need to attend lengthy earnings report calls. We also
                    analyze 10+ trusted sites you should research before
                    trading.
                  </Typography>
                  <List>
                    {[
                      "Skip lengthy earnings calls with concise summaries.",
                      "Research from 10+ trusted sites, all in one place.",
                      "Streamlined data saves hours of analysis.",
                      "Focus on strategy instead of research.",
                    ].map((text, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>

              {/* AI-Generated Section */}
              <Grid container spacing={4} sx={{ mb: 8 }}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" gutterBottom sx={sectionTitleStyles}>
                    AI-Generated, Unbiased
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    We use ChatGPT 4.0 API. We provide neutral, unbiased
                    information with references to let you make informed
                    decisions.
                  </Typography>
                  <List>
                    {[
                      "Powered by ChatGPT 4.0 for advanced insights.",
                      "Neutral, unbiased information.",
                      "AI-driven summarization and API-based.",
                      "Apply your intelligence - Buy or Sell.",
                    ].map((text, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    image="https://c.animaapp.com/TYQOTS8E/img/screen-mockup--replace-fill--2.png"
                    alt="Mockup"
                    sx={{ borderRadius: 4, height: 512 }}
                  />
                </Grid>
              </Grid>
            </>
          );
        })()}
      </Container>

      <Container
        maxWidth={false}
        sx={{
          padding: "96px 0 var(--spacing-9xl, 96px) 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--spacing-7xl, 44px)",
          background: "#F9FAFB",
          width: "100%",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          How Does It Work?
        </Typography>
        <Box
          sx={{
            display: {xs : "none", sm:'flex'},
            alignItems: "center",
            justifyContent: "space-between",
            width: "70%",
            maxWidth: "1200px", // Constrain content to a maximum width
          }}
        >
          <CardMedia
            component="img"
            image="https://c.animaapp.com/TYQOTS8E/img/featured-icon-6.svg"
            alt="Step 1"
            sx={{ width: 60, height: 60 }}
          />
          <div
            style={{
              flexGrow: 1,
              height: "1px",
              backgroundColor: "gray",
              margin: "0 16px",
            }}
          />
          <CardMedia
            component="img"
            image="https://c.animaapp.com/TYQOTS8E/img/featured-icon-7.svg"
            alt="Step 2"
            sx={{ width: 60, height: 60 }}
          />
          <div
            style={{
              flexGrow: 1,
              height: "1px",
              backgroundColor: "gray",
              margin: "0 16px",
            }}
          />
          <CardMedia
            component="img"
            image="https://c.animaapp.com/TYQOTS8E/img/featured-icon-8.svg"
            alt="Step 3"
            sx={{ width: 60, height: 60 }}
          />
        </Box>
        <Grid container spacing={0} sx={{ mt: 0 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Choose Your Reports and Ticker Symbols
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Select the number of reports you need
                <br />
                and enter the specific ticker symbols
                <br />
                (stocks, mutual funds, ETFs) you're interested in.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Select Your Plan
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Choose from two subscription plans for regular <br />
                reports or opt for Pay-As-You-Go (pay per report)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Receive AI-Generated Reports
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Once your payment is confirmed, you'll receive detailed,
                <br />
                AI-generated reports directly to your email.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            alignSelf: "stretch",
            color: "#101828",
            textAlign: "center",
            fontFamily: "Fold Grotesque Pro",
            fontSize: "var(--Font-size-display-lg, 48px)",
            fontStyle: "normal",
            fontWeight: 850,
            lineHeight: "var(--Line-height-display-lg, 60px)", // 125%
            letterSpacing: "-0.96px",
          }}
        >
          Pricing Plans
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Simple, transparent pricing.
        </Typography>
        <Grid container spacing={4.5} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{
              p: 3.75, textAlign: "center", mt: 6.9,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.96)", // Soft shadow
              borderRadius: "var(--radius-md, 8px)", // Consistent border radius
            }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#101828", // Ensures consistent text color
                  textAlign: "center", // Centers the text
                  fontFamily: "Fold Grotesque Pro", // Applies the desired font
                  fontSize: "var(--Font-size-display-lg, 48px)", // Sets the font size
                  fontStyle: "normal", // Resets any inherited styles
                  fontWeight: 850, // Makes the text bold
                  lineHeight: "var(--Line-height-display-lg, 60px)", // Sets line height to 125%
                  letterSpacing: "-0.96px", // Adjusts spacing between letters
                  whiteSpace: "nowrap", // Prevents wrapping of text
                }}
              >
                $10/month
              </Typography>

              <Typography variant="h6" gutterBottom>
                Pay As You Go
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Get your reports on a regular basis without any extra costs.
                Ideal for users who need a few insights each month
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="1 report as you need it" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Great for one-time needs." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AddCircleOutline
                      color="error"
                      style={{
                        transform: "rotate(45deg)",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="No Monthly subscription" />
                </ListItem>
              </List>
              {/* <PaypalButton price={10}/> */}
              <Button
                variant="contained"
                color="primary"
                sx={{
                  display: "flex",
                  padding: "var(--spacing-lg, 12px) 102px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--spacing-sm, 6px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--radius-md, 8px)",
                  border: "2px solid rgba(255, 255, 255, 0.12)",
                  backgroundColor: "#168118", // Ensure consistent primary color
                  boxShadow:
                    "0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                  color: "#FFF",
                  fontFamily: '"Fold Grotesque Pro"',
                  fontSize: "var(--Font-size-text-md, 16px)",
                  fontStyle: "normal",
                  fontWeight: 850,
                  lineHeight: "var(--Line-height-text-md, 24px)", // 150%
                  textTransform: "none", // Prevent uppercase text transformation
                  "&:hover": {
                    backgroundColor: "#136A15", // Darken the background on hover
                  },
                }}
                onClick={() => setIsModalOpen(true)}
              >
                Get Started
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{
              p: 3.75, textAlign: "center", mt: 6.9,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.96)", // Soft shadow
              borderRadius: "var(--radius-md, 8px)", // Consistent border radius
            }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#101828", // Ensures consistent text color
                  textAlign: "center", // Centers the text
                  fontFamily: "Fold Grotesque Pro", // Applies the desired font
                  fontSize: "var(--Font-size-display-lg, 48px)", // Sets the font size
                  fontStyle: "normal", // Resets any inherited styles
                  fontWeight: 850, // Makes the text bold
                  lineHeight: "var(--Line-height-display-lg, 60px)", // Sets line height to 125%
                  letterSpacing: "-0.96px", // Adjusts spacing between letters
                  whiteSpace: "nowrap", // Prevents wrapping of text
                }}
              >
                $10/month
              </Typography>

              <Typography variant="h6" gutterBottom>
                Pay As You Go
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Get your reports on a regular basis without any extra costs.
                Ideal for users who need a few insights each month
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="1 report as you need it" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Great for one-time needs." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AddCircleOutline
                      color="error"
                      style={{
                        transform: "rotate(45deg)",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="No Monthly subscription" />
                </ListItem>
              </List>
              {/* <PaypalButton price={10}/> */}
              <Button
                variant="contained"
                color="primary"
                sx={{
                  display: "flex",
                  padding: "var(--spacing-lg, 12px) 102px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--spacing-sm, 6px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--radius-md, 8px)",
                  border: "2px solid rgba(255, 255, 255, 0.12)",
                  backgroundColor: "#168118", // Ensure consistent primary color
                  boxShadow:
                    "0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                  color: "#FFF",
                  fontFamily: '"Fold Grotesque Pro"',
                  fontSize: "var(--Font-size-text-md, 16px)",
                  fontStyle: "normal",
                  fontWeight: 850,
                  lineHeight: "var(--Line-height-text-md, 24px)", // 150%
                  textTransform: "none", // Prevent uppercase text transformation
                  "&:hover": {
                    backgroundColor: "#136A15", // Darken the background on hover
                  },
                }}
                onClick={() => setIsModalOpen(true)}
              >
                Get Started
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{
              p: 3.75, textAlign: "center", mt: 6.9,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.96)", // Soft shadow
              borderRadius: "var(--radius-md, 8px)", // Consistent border radius
            }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#101828", // Ensures consistent text color
                  textAlign: "center", // Centers the text
                  fontFamily: "Fold Grotesque Pro", // Applies the desired font
                  fontSize: "var(--Font-size-display-lg, 48px)", // Sets the font size
                  fontStyle: "normal", // Resets any inherited styles
                  fontWeight: 850, // Makes the text bold
                  lineHeight: "var(--Line-height-display-lg, 60px)", // Sets line height to 125%
                  letterSpacing: "-0.96px", // Adjusts spacing between letters
                  whiteSpace: "nowrap", // Prevents wrapping of text
                }}
              >
                $10/month
              </Typography>

              <Typography variant="h6" gutterBottom>
                Pay As You Go
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Get your reports on a regular basis without any extra costs.
                Ideal for users who need a few insights each month
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="1 report as you need it" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Great for one-time needs." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AddCircleOutline
                      color="error"
                      style={{
                        transform: "rotate(45deg)",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="No Monthly subscription" />
                </ListItem>
              </List>
              {/* <PaypalButton price={10}/> */}
              <Button
                variant="contained"
                color="primary"
                sx={{
                  display: "flex",
                  padding: "var(--spacing-lg, 12px) 102px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--spacing-sm, 6px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--radius-md, 8px)",
                  border: "2px solid rgba(255, 255, 255, 0.12)",
                  backgroundColor: "#168118", // Ensure consistent primary color
                  boxShadow:
                    "0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                  color: "#FFF",
                  fontFamily: '"Fold Grotesque Pro"',
                  fontSize: "var(--Font-size-text-md, 16px)",
                  fontStyle: "normal",
                  fontWeight: 850,
                  lineHeight: "var(--Line-height-text-md, 24px)", // 150%
                  textTransform: "none", // Prevent uppercase text transformation
                  "&:hover": {
                    backgroundColor: "#136A15", // Darken the background on hover
                  },
                }}
                onClick={() => setIsModalOpen(true)}
              >
                Get Started
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>


      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <div>
          <Accordion
            sx={{
              boxShadow: "none", // Removes shadow
              border: "none", // Removes border
              "&:before": { display: "none" }, // Removes the divider line
            }}
            defaultExpanded
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">What is included in the report?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Our report includes fundamental and technical analysis, earnings summaries, market recommendations, and key insights for making informed stock decisions.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "none",
              border: "none",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">How does the report save time?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "none",
              border: "none",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">How can this report help me save money?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "none",
              border: "none",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography component="span">Is the information unbiased?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "none",
              border: "none",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography component="span">How AI is used in creating a report?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--spacing-4xl, 32px)",
          alignSelf: "stretch",
          padding:
            "var(--spacing-4xl, 32px) var(--spacing-4xl, 32px) var(--spacing-5xl, 40px) var(--spacing-4xl, 32px)",
          borderRadius: "var(--spacing-xl, 16px)",
          background: "#F9FAFB",
        }}
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            alignSelf: "stretch",
            color: "#101828",
            textAlign: "center",
            fontFamily: "Fold Grotesque Pro",
            fontSize: "var(--Font-size-text-xl, 40px)",
            fontStyle: "normal",
            fontWeight: 850,
            lineHeight: "var(--Line-height-text-xl, 30px)", // 150% line height
          }}
        >
          Still have questions?
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{
            display: "flex",
            padding: "var(--spacing-xl, 16px) 22px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "var(--radius-lg, 10px)",
            border: "1px solid #FFF",
            background: "#168118",
            color: "#FFF",
            boxShadow:
              "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(16, 24, 40, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(16, 24, 40, 0.05)) inset, 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(16, 24, 40, 0.05))",
            fontFamily: "'Fold Grotesque Pro', sans-serif",
            fontSize: "var(--Font-size-text-lg, 18px)",
            fontStyle: "normal",
            fontWeight: 850,
            lineHeight: "var(--Line-height-text-lg, 28px)",
          }}
          onClick={scrollToContactUs}
        >
          CONTACT US
        </Button>
      </Container>

      <Container maxWidth="lg" sx={{ py: 10 }} ref={contactUsRef} >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="https://c.animaapp.com/TYQOTS8E/img/image.png"
              alt="Contact Us"
              sx={{ borderRadius: 4, height: 800 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Our friendly team would love to hear from you.
            </Typography>
            <Box component="form" sx={{ mt: 4 }}>
              <TextField
                fullWidth
                label="Name"
                required
                margin="normal"
                variant="outlined"
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
              />
              <TextField
                fullWidth
                label="Email"
                required
                margin="normal"
                variant="outlined"
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              />
              <TextField
                fullWidth
                label="Phone number"
                margin="normal"
                variant="outlined"
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
              />
              <TextField
                fullWidth
                label="Message"
                required
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
                onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
              />
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: "100%" }}
                  onClick={() => handleSendMail({ ...contactInfo, mode: 'Contact Us' })}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#168118", py: 6 }}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
            sx={{ flexDirection: "column", display: "flex" }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src="../img_footer.png"
                  style={{ height: "150px", width: "150px" }}
                  alt="footer logo"
                />
                <Box>
                  <Button
                    href="../sample_report.pdf"
                    download="sample_report.pdf"
                    variant="text"
                    color="inherit"
                    sx={{
                      fontFamily: "Fold Grotesque Pro",
                      fontSize: "var(--Font-size-text-md, 16px)",
                      fontWeight: 850,
                      lineHeight: "var(--Line-height-text-md, 24px)",
                      color: "white",
                    }}
                  >
                    Sample Report 1
                  </Button>
                  <Button
                    variant="text"
                    color="inherit"
                    sx={{
                      fontFamily: "Fold Grotesque Pro",
                      fontSize: "var(--Font-size-text-md, 16px)",
                      fontWeight: 850,
                      lineHeight: "var(--Line-height-text-md, 24px)",
                      color: "white",
                    }}
                  >
                    Sample Report 2
                  </Button>
                  <Button
                    variant="text"
                    color="inherit"
                    sx={{
                      fontFamily: "Fold Grotesque Pro",
                      fontSize: "var(--Font-size-text-md, 16px)",
                      fontWeight: 850,
                      lineHeight: "var(--Line-height-text-md, 24px)",
                      color: "white",
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <hr
                style={{
                  color: "white",
                  width: "100%",
                  height: "1px",
                  margin: "30px 0px",
                }}
              />
              <div style={{ padding: "10px" }}>
                <Typography color="white">
                  Copyright © 2025 My AI Report | Trade Wisely. All Rights
                  Reserved.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
