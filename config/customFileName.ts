interface CustomName {
    id: string
    condition: (url: string) => boolean;
    getCustomName: (...args: any[]) => string;
}

const customsFilesName: CustomName[] = [
    {
        id: "isMeetup",
        condition: (url) => {
            return url.includes("meetup.com")
        },
        getCustomName: (url) => {
            const postMeetupPart: string = url.replace(/.*meetup\.com\//, "");
            const cleanPostMeetupPart = postMeetupPart.replace(/[\/\\]/g, '');
            return cleanPostMeetupPart;
        }
    }
]

export {
    customsFilesName
}