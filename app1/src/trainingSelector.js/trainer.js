import React, { useEffect, useState } from "react";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { TextLoader } from "langchain/document_loaders/fs/text";

const LanguageProcessorComponent = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loader = new TextLoader("app1/src/trainingSelector.js/publiclyTradedCompanies.txt");
        const docs = await loader.load();
        const vectorStore = await MemoryVectorStore.fromDocuments(
          docs,
          new OpenAIEmbeddings()
        );
        const resultOne = await vectorStore.similaritySearch("apple");
        setResult(resultOne);
      } catch (error) {
        console.error("Error processing language data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {result ? (
        <div>
          <h2>Similarity Search Result for 'apple':</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LanguageProcessorComponent;
