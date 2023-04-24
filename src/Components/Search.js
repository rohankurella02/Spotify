import Card2 from "./Card2";
function Search() {
    let arr1=[{
        podcastName:"Joe Rogan Experience #1278 - Kevin Hart",
        speakerName:"Kevin Hart",
        podcastDescription:"Kevin Hart is a comedian, actor and producer. His new stand up special Kevin Hart: Irresponsible is now streaming on Netflix",
        category:"Comedy",
        language:"English",
        views:"18,794,353",
        thumbnail:"https://i3.ytimg.com/vi/XW_KhFq4LQo/maxresdefault.jpg",
        },
        {
        podcastName:"Spiritual Awakening Changed Me - @RaashiiKhannaOfficial | The Habit Coach Podcast with Ashdin Doctor",
        speakerName:"Raashi Khanna",
        podcastDescription:"In this episode, Madras Cafe actor @RaashiiKhannaOfficial, speaks to Ashdin about her journey to discovering her spiritual side, getting in touch with her intuition, practicing meditation consistently and diligently, exploring different philosophies, and being sorted at a young age. ",
        category:"Spiritual",
        language:"English",
        views:"210,406",
        thumbnail:"https://i3.ytimg.com/vi/3_9ylE4rCJ4/maxresdefault.jpg",
        },
        {
        podcastName:"Mark Zuckerberg: Meta, Facebook, Instagram, and the Metaverse | Lex Fridman Podcast #267",
        speakerName:"Mark Zuckerberg",
        podcastDescription:"Mark Zuckerberg is CEO of Meta, formerly Facebook.",
        category:"Technology",
        language:"English",
        views:"4,033,600",
        thumbnail:"https://i3.ytimg.com/vi/5zOHSysMmH0/maxresdefault.jpg"
        },
        {
            podcastName:"Joe Rogan Experience #1278 - Kevin Hart",
            speakerName:"Kevin Hart",
            podcastDescription:"Kevin Hart is a comedian, actor and producer. His new stand up special Kevin Hart: Irresponsible is now streaming on Netflix",
            category:"Comedy",
            language:"English",
            views:"18,794,353",
            thumbnail:"https://i3.ytimg.com/vi/XW_KhFq4LQo/maxresdefault.jpg",
            },
            {
            podcastName:"Spiritual Awakening Changed Me - @RaashiiKhannaOfficial | The Habit Coach Podcast with Ashdin Doctor",
            speakerName:"Raashi Khanna",
            podcastDescription:"In this episode, Madras Cafe actor @RaashiiKhannaOfficial, speaks to Ashdin about her journey to discovering her spiritual side, getting in touch with her intuition, practicing meditation consistently and diligently, exploring different philosophies, and being sorted at a young age. ",
            category:"Spiritual",
            language:"English",
            views:"210,406",
            thumbnail:"https://i3.ytimg.com/vi/3_9ylE4rCJ4/maxresdefault.jpg",
            },
            {
            podcastName:"Mark Zuckerberg: Meta, Facebook, Instagram, and the Metaverse | Lex Fridman Podcast #267",
            speakerName:"Mark Zuckerberg",
            podcastDescription:"Mark Zuckerberg is CEO of Meta, formerly Facebook.",
            category:"Technology",
            language:"English",
            views:"4,033,600",
            thumbnail:"https://i3.ytimg.com/vi/5zOHSysMmH0/maxresdefault.jpg"
            },{
                podcastName:"Joe Rogan Experience #1278 - Kevin Hart",
                speakerName:"Kevin Hart",
                podcastDescription:"Kevin Hart is a comedian, actor and producer. His new stand up special Kevin Hart: Irresponsible is now streaming on Netflix",
                category:"Comedy",
                language:"English",
                views:"18,794,353",
                thumbnail:"https://i3.ytimg.com/vi/XW_KhFq4LQo/maxresdefault.jpg",
                },
                {
                podcastName:"Spiritual Awakening Changed Me - @RaashiiKhannaOfficial | The Habit Coach Podcast with Ashdin Doctor",
                speakerName:"Raashi Khanna",
                podcastDescription:"In this episode, Madras Cafe actor @RaashiiKhannaOfficial, speaks to Ashdin about her journey to discovering her spiritual side, getting in touch with her intuition, practicing meditation consistently and diligently, exploring different philosophies, and being sorted at a young age. ",
                category:"Spiritual",
                language:"English",
                views:"210,406",
                thumbnail:"https://i3.ytimg.com/vi/3_9ylE4rCJ4/maxresdefault.jpg",
                },
                {
                podcastName:"Mark Zuckerberg: Meta, Facebook, Instagram, and the Metaverse | Lex Fridman Podcast #267",
                speakerName:"Mark Zuckerberg",
                podcastDescription:"Mark Zuckerberg is CEO of Meta, formerly Facebook.",
                category:"Technology",
                language:"English",
                views:"4,033,600",
                thumbnail:"https://i3.ytimg.com/vi/5zOHSysMmH0/maxresdefault.jpg"
                },
        ]
  return (
    <div className="Search">
    <div className="DisplayHome2 d-flex">
    {
        arr1.map((item)=>
        <Card2 item={item}/>)
    }
    </div>
    </div>
  );
}

export default Search;
