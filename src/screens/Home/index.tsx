import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [newParticipant, setNewParticipant] = useState('');

    function handleParticipantAdd() {
        if (participants.includes(newParticipant)) {
            return Alert.alert('Participante já cadastrado', 'O participante informado já está na lista de participantes.');
        }

        setParticipants(prevState => [...prevState, newParticipant]);
        setNewParticipant('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover participante', `Deseja remover o participante ${name}?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter(participant => participant !== name));
                    Alert.alert('Participante removido', `O participante ${name} foi removido com sucesso.`);
                }
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2024.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor={'#6B6B6B'}
                    keyboardType='default'
                    onChangeText={setNewParticipant}
                    value={newParticipant}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant
                        name={item}
                        onRemove={handleParticipantRemove}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyListText}>
                        Nenhum participante cadastrado. 😢
                    </Text>
                )}
            />
        </View>
    );
}
