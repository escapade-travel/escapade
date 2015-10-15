Articles Json format:

Add below to the end of 'result' in articles.json:

{
    "id": <new_id>,
    "thumbnail": "/assets/img/article<new_id>_small.jpg",
    "title": "Article Title",
    "description": "Article Description"
}

and create a new article<new_id>.json file in /data folder.
 
Article Json file format example:

{
    "id": 2,
    "image": "/assets/img/article2_full.jpg",
    "thumbnail": "/assets/img/article2_small.jpg",
    "title": "有故事的教堂 ",
    "description": "英国教堂探秘 ",
    "tags": ["历史", "艺术", "宗教"],
    "html": ""
}

"html" should contain the article content using HTML tags with line break removed.
Eg. "<p>First paragraph</p><h3>headings</h3><p>Second paragraph</p><img class='img-responsive' src='link-to-image'><p>Thrid paragraph with <b>bold words</b></p>"