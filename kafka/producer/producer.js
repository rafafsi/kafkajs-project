import kafka from "../../config.js";

const produce = async (key, value) => {
  const topic = "tosign";
  const producer = kafka.producer();
  await producer.connect();
  try {
    await producer.send({
      topic,
      messages: [
        {
          key: key, // I have no worries about partitioning
          value: value,
        },
      ],
    });
  } catch {
    (error) => console.log(error);
  } finally {
    await producer.disconnect();
  }
};

export default produce;
