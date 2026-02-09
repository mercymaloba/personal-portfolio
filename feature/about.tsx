import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const About =()=>{
    return <Stack>
        <Stack>
        <Typography variant="h4">About Me</Typography>
        <Typography variant="body1">
            Passionate about creating exceptional digital experiences and building high-performing engineering teams
        </Typography>
        </Stack>
        <Stack direction ="row">
        <Typography variant="body1">
            My Journey
        </Typography>
            <Typography variant="body2">
                With over 8 years in software engineering, I have had the privilege of working across diverse industries—from fintech startups to enterprise SaaS platforms. My journey began as a full-stack developer, but I quickly discovered my passion for system architecture and team leadership.
                I specialize in building scalable applications using modern technologies like React, Node.js, TypeScript, and AWS. I am particularly passionate about developer experience, clean architecture, and fostering collaborative team environments.
                When I am not coding, you will find me mentoring junior developers, contributing to open source projects, or exploring the latest trends in cloud computing and AI.
            </Typography>

        </Stack>
    </Stack>
}

