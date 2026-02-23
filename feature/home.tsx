import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

export const Home = () => {
    return (
        <Stack>
            <Typography> Mercy Maloba</Typography>
            <Typography> Senior Software Engineer</Typography>
            <Typography>
                {" "}
                Building scalable applications and leading engineering teams with 8+ years
                of experience in full-stack development, cloud architecture, and modern
                web technologies.
            </Typography>

            <Stack direction="row">
                <Button>Get in Touch</Button>
                <Button>View My Work</Button>
            </Stack>

            <Stack direction="row">
                <Button>LinkedIn</Button>
                <Button>GitHub</Button>
                <Button>Gmail</Button>
            </Stack>
            <ArrowDropDownCircleIcon/>
        </Stack>)
};
