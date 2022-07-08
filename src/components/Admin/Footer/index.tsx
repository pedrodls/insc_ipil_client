import { Link, Typography } from "@mui/material";

 export function Footer(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        <Link color="inherit" href="https://makarenkoipil.com">
          INSTITUTO POLITÉCNICO INDUSTRIAL DE LUANDA - IPIL
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }