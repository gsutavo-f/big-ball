import ReactCountryFlag from "react-country-flag";

type FlagProps = {
    code: string;
}

export function Flags(props: FlagProps) {
    return (
        <ReactCountryFlag
            countryCode={props.code}
            svg
            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
            style={{
                width: '1.5rem',
                height: '1.5rem',
                borderRadius: '50%',
                marginRight: '0.75rem',
                boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.5)'
            }}
            cdnSuffix="svg"
            title={props.code}
        />
    );
}