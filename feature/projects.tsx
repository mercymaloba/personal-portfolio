import {Chip, Stack} from "@mui/material"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Projects = () => {
    return (
        <Stack>
            <Typography variant="h1">Featured projects</Typography>
            <Typography>A showcase of my recent work in full stack development from concept to deployment</Typography>

            <Stack sx={{backgroundColor: 'grey.300', padding: 2, borderRadius: 1}}>
                <Typography variant="h4">Project 1: E-commerce platform</Typography>
                <Typography variant="body1">A scalable e-commerce platform built with React, Node.js, and MongoDB,
                    featuring a responsive design, secure payment integration, and real-time inventory
                    management.</Typography>
                <Stack direction="row">
                    <Chip variant="outlined" label="react"/>
                    <Chip variant="outlined" label="react"/>
                    <Chip variant="outlined" label="react"/>
                    <Chip variant="outlined" label="react"/>
                </Stack>


            </Stack>

            <Button variant='contained'>
                View All Projects on Github
            </Button>
        </Stack>
    )
}

export default Projects;