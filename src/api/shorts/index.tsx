interface obj {
    video: any;
    content: String;
    avatar: any;
    name: String;
    likes: String;
    comments: String;
}

export const shortsApi: obj[] = [
    {
        video: require('./videos/video1.mp4'),
        content: 'M1 Garand 1943',
        avatar: require('./imgs/img1.jpg'),
        name: '@mishas_guns',
        likes: '4,6 Tr',
        comments: '6 N',
    },
    {
        video: require('./videos/video2.mp4'),
        content: 'Game Of Thrones - Ice Dragon Night King Destroys The Wall',
        avatar: require('./imgs/img2.jpg'),
        name: '@actionshorts2023',
        likes: '133 N',
        comments: '370',
    },
    {
        video: require('./videos/video3.mp4'),
        content: 'Start a war',
        avatar: require('./imgs/img3.jpg'),
        name: '@caissatoy_5419',
        likes: '545 N',
        comments: '1,1 N',
    },
    {
        video: require('./videos/video4.mp4'),
        content: 'Model 59 Smith & Wesson 9mm',
        avatar: require('./imgs/img4.jpg'),
        name: '@mishas_guns',
        likes: '439 N',
        comments: '2,1 N',
    },
    {
        video: require('./videos/video5.mp4'),
        content: '@Vulcan for the range bags @tacticalsh*t for the freedom seeds 🤘',
        avatar: require('./imgs/img5.jpg'),
        name: '@PewView',
        likes: 'Thích',
        comments: '2 N',
    },
];
