import { Kafka, logLevel } from "kafkajs";

const kafka = new Kafka({
    clientId: 'thcs-backend',
    brokers: ['localhost:9092'],
})

export default kafka