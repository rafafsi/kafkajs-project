import kafka from '../../config.js'

const topic = "tosign";
const consumer = kafka.consumer({ groupId: "tosign-listener" });

const consume = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: topic });
  await consumer.run({
    eachMessage: async (message) => {
      console.log("message recieved: ", message.message.value.toString());
    },
  });
};

export default consume