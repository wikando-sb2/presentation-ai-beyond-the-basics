# Notes

## Introduction

- Foundation Models arose from Large Language Models which, in turn, arose from Language Models.
- Long before LLMs became prominent, AI was already powering many applications:
    - Recommendation systems, fraud detection, search engines, and more.
- Many principles of AI engineering are still the same, although the new powerful models gave rise to a plethora of new
  possibilities and challenges.
- ChatGPT and GitHub Copilot seemingly came out of nowhere, but the first language models were invented in the 1950s.
- What changed the game was the self-supervision.

## Language models

- A language model encodes statistical information about one or more languages.
- This information tells us how likely a word is to appear in a given context.
- For example, the next word in "My favorite color is..." is more likely to be
  "blue" than "car".
- The basic unit of a language model is the token.
- A token can be a word, a part of a word (like the suffix "ing"), a single character, or even a punctuation mark.
- Example:
  <I> <can><'t> <wait> <to> <build> <awesome> <applications>.
- The process of breaking the original text into tokens is called tokenization.
- For some GPT models, a token is approximately 3/4 of a word on average. So 75 words use about 100 tokens.
- There are main types of language models.
    - **Masked language models** are trained to predict missing tokens anywhere _in_
      a sequence, using the context from before _and_ after the missing token.
    - Those models are usually used for non-generative tasks, such as analysis and classification.
    - **Autoregressive language models** are trained to predict the next token in a sequence, using _only the preceding
      tokens_ as context.
    - They are mainly used for generating text, and therefore much more popular at the moment.
    - Therefore, if we speak about a language model, we usually mean an autoregressive language model.
- Language model completions are predictions based on probabilities of a token in a sequence. **There is _no_ guarantee
  that they are correct.**
- Completion is powerful, but it is not the same as engaging in a conversation.
    - For example, it is very likely that the next possible sequence of tokens is a question. Imagine asking "What is
      your favorite color?" and the model predicts "What is your favorite food?".
- This is why post-training is necessary to make the model more aligned with human and expectations.

![Autoregressive and Masked Language Models](/assets/language_models.png)

## Why use tokens?

- Compared to characters, tokens allow the model to break words into meaningful components.
    - For example, cooking becomes <cook><ing> and unhelpful becomes <un><help><ful>.
- There are fewer unique tokens than unique words. This reduces the models vocabulary size and makes the model more
  efficient.
- Tokens also allow the model to process unknown words and derive meaning.
    - For exmaple, you could invent chatgpting and the model would interpret it as
      <chatgpt><ing>. This structure conveys a lot of meaning.

## Self-supervision and large language models

- Language modeling is just one of many machine learning algorithms.
- There are also models for object detection, topic modeling, recommendation systems, weather forecasting, stock price
  prediction, and much more.
- So what makes language modeling so special that it caused the ChatGPT-initiated AI revolution?
- The answer is that language models can be trained using self-supervision.
- Supervision refers to the process of training machine learning algorithms using labeled data, which can be slow and
  expensive.
- Self-supervision helps overcome the data-labeling bottleneck by using the data itself to generate labels.
- The model that started this revolution was AlexNet, which was trained to learn how to classify over 1 million images
  in the dataset of ImageNet.
- It classified each image into one of 1,000 categories, such as "car", "balloon", or "monkey".
- If it costs 5 cents for a person to label one image, it'd cost $50,000 to label a million.
- If more people start labeling, it gets even more expensive.
- So to scale up to one million categories would end up costing $50 million and more, which is not feasible.
- A model, however, that can _infer labels from input data_ can be trained on much larger datasets.
- Text sequences are everywhere. In books, blog posts, articles, social media posts, etc.
- That makes it possible to construct a massive amount of training data. And this allows a language model to become a
  **large language model** (LLM).
- There are no hard numbers that define a large language model.
- OpenAI's first generative pre-trained transformer (GPT) model had 117 million parameters and was considered very
  large.
- GPT-2 was introduced with 1.5 _billion_ parameters. Later came models with 100 billion parameters and more.
- So who knows what will be considered a language model or a large language model in the future.

## Foundation models

- Being able to process data beyond text is essential for AI to operate in the real world.
- GPT-4 and Claude 3 were already able to understand images and texts, 3D assets, protein structures, and more.
- People keep calling modern AI LLMs, which is not wrong, but what we are actually dealing with, are foundation models.
- Foundation models mark an important breakthrough.
- For a long time, AI research was divided by data modalities.
    - Natural language processing (NLP) deals only with text.
    - Computer vision (CV) deals only with images and videos.
    - Text-only models can be used for translation and spam detection.
    - Image-only models can be used for object detection and image classification.
    - Audio-only models can be used for speech recognition and speech synthesis (speec-to-text, STT, and text-to-speech,
      TTS).
- A model that can work with more than one data modality is also called a **multimodal model**.
- A generative multimodal model is also called a **large multimodal model** (LMM).
- Just like language models, multimodal models need data to scale up.
    - For example, OpenAI's language-image model CLIP was trained on 400 million image-text pairs.
- So, are all foundation models multimodal models? Not necessarily. A foundation model can be unimodal, but it is
  usually multimodal.
- A foundation model is trained on broad data at scale and are suited for a wide variety of tasks. It's a
  general-purpose model.
- A multimodal model is a model that can process multiple data modalities.
- So they are often used interchangeably, and it's often correct, but not always.

![Multimodal models](/assets/multimodal_model.jpg)

## From foundation models to AI engineering

- There are many ways to get a model to generate what you want.
- The most famous one is prompt engineering, which means crafting a prompt that will lead the model to generated the
  desired output.
- Another one is retrieval-augmented generation (RAG), which means retrieving relevant information from another source
  and add it to the context of a prompt.
- You can also _finetune_, i.e. further train, a model on a dataset to make correct output more likely.
- The three techniques are an integral part of what we call AI engineering; the process of building applications on top
  of foundation models.
- Traditional machine learning (ML) engineering involved developing models.
- In AI engineering, you leverage existing ones.
- The terminology here is manifold. Instead of AI engineering, you might also say ML engineering, ML ops, AI ops, or
  even LLM ops.
- However, AI engineering is the best suited term. As mentioned before, ML involves the creation of models, and the
  addition of "ops" implies that operations work is involved, which may or may not be the case.

## Quellen

- "AI Engineering: Building Applications with Foundation Models"
  by Chip Huyen (O'Reilly Media, 2024).