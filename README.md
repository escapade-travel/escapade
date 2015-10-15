Articles Json format:

Add below to the end of 'result' in articles.json (Replace 'id' with the latest id number) so that it will appear in the article list page.

{

    "id": 5,
    
    "thumbnail": "/assets/img/article5_small.jpg",
    
    "title": "Article Title",
    
    "description": "Article Description"
    
}

Then create a new article5.json file in data folder, so that you a detail page is created for this article.
 
Article Json file format example:

{
    "id": 5,
    
    "image": "/assets/img/article5_full.jpg",
    
    "thumbnail": "/assets/img/article5_small.jpg",
    
    "title": "有故事的教堂 ",
    
    "description": "英国教堂探秘 ",
    
    "tags": ["历史", "艺术", "宗教"],
    
    "html": "see below"
    
}

"html" should contain the article content using HTML tags (p for paragraph, img for embedded images, h+number for headings, a for link, b for bold texts, etc) with line break removed.

Use online Space trimmer to remove line breaks and online Json Validator before commit the json file