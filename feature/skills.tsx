import {Chip, Stack} from "@mui/material"
import Typography from "@mui/material/Typography";

export const Skills = () => {
    return (
        <Stack>
            <Typography variant="h1">Skills & Expertise</Typography>
            <Typography>A comprehensive skill set spanning the full software development lifecycle</Typography>

            <Stack sx={{backgroundColor: 'grey.300', padding: 2, borderRadius: 1}}>
                <Typography variant="h4">Frontend development</Typography>
                <Typography variant="body1">
                    Creating beautiful responsive user interfaces </Typography>
                <Stack direction="row">
                    <Chip variant="outlined" label="react"/>
                    <Chip variant="outlined" label="react"/>
                    <Chip variant="outlined" label="react"/>
                    <Chip variant="outlined" label="react"/>
                </Stack>
            </Stack>
            <Stack>
                <Typography variant="h4">Currently focusing on</Typography>
                <Stack direction="row">
                    <Chip variant="outlined" label="react"/>
                    <Chip variant="outlined" label="react"/>
                    <Chip variant="outlined" label="react"/>
                    <Chip variant="outlined" label="react"/>
                </Stack>
            </Stack>
        </Stack>
    )
}