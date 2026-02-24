import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactDetails = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h1" color="textSecondary">
                Let us work together

            </Typography>
            <Typography>Have a project in mind or want to discuss opportunities? I would love to hear from
                you.</Typography>

            <Stack direction="row">
                <Stack sx={{backgroundColor: 'grey.300', padding: 2, borderRadius: 1}}>
                    <Typography>Send me a message</Typography>
                    <Stack direction="row">
                        <Typography>Name</Typography>
                        <TextField/>
                        <Typography>Email</Typography>
                        <TextField/>


                    </Stack>
                    <Typography>Subject</Typography>
                    <TextField/>
                    <Typography>Message</Typography>
                    <TextField multiline/>
                </Stack>
                <Button variant="contained" color="primary">Send message</Button>

                <Stack>
                    <Typography variant="h4">Get in touch</Typography>
                    <Typography variant="h4">Im always open to discussing new opportunities, interesting projects, or
                        just having a chat about technology and software development.</Typography>
                    <Stack direction="row">
                        <EmailIcon/>
                        <Stack direction='column'>
                            <Typography variant="h6">Email</Typography>
                            <Typography>mmaloba@gmail.com</Typography>
                        </Stack>
                        <EmailIcon/>
                        <Stack direction='column'>
                            <Typography variant="h6">Phone</Typography>
                            <Typography>0740400160</Typography>
                        </Stack>
                        <EmailIcon/>
                        <Stack direction='column'>
                            <Typography variant="h6">Location</Typography>
                            <Typography>Nairobi</Typography>
                        </Stack>
                  </Stack>
                    <Typography>Follow me</Typography>
                    <Stack direction="row">
                        <LinkedInIcon/>
                        <LinkedInIcon/>
                        <LinkedInIcon/>
                    </Stack>
                    <Stack sx={{ backgroundColor: 'grey.300', padding: 2, borderRadius: 1 }}>
                        <Typography variant="h4">Currently Available
                        </Typography>
                        <Typography variant="body1">Open to full-time opportunities, consulting projects, and interesting collaborations.

                        </Typography>

                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default ContactDetails;
