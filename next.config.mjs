/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home"
            },
            {
                source: "/imc",
                destination: "/imc"
            },
            {
                source: "/media",
                destination: "/media"
            }
        ]
    }

};


export default nextConfig;