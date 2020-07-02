import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

//View = div, footer, header, main, aside, section
//Text = p, span, strong, h1, h2, 
//Todos os componentes possuem por padrão 'display: flex'
//Um estilo específico para cada Tag

export default function App() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		api.get('projects').then(response => {
	
			setProjects(response.data);
			//console.log(response.data);
			
		})
	}, []);

	async function handleAddProject(){
		const response = await api.post('projects', {
			title: `Novo Projeto ${Date.now()}`,
			owner: 'Jéssica Thomaz'
		});

		const project = response.data;
		
		setProjects([...projects, project]);
	};

	return (
		<>
			<StatusBar backgroundColor="#7159c1"/>

			<SafeAreaView style={styles.container}>
				<FlatList 
					data={projects}
					keyExtractor={project => project.id}
					renderItem={({ item: project }) => (
						<Text style={styles.title}>{project.title}</Text>
					)}
				/>

				<TouchableOpacity 
					activeOpacity={0.8} 
					style={styles.button} 
					onPress={handleAddProject}
				>
					<Text style={styles.buttonText}Adicionar Projeto>Adicionar Projeto</Text>
				</TouchableOpacity>
			</SafeAreaView>

			{/* <View style={styles.container}>
				{projects.map(project => <Text style={styles.title} key={project.id}>{project.title}</Text>)}
			</View> */}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7159c1',
	}, 
	title: {
		textAlign: 'center',
		fontSize: 30,
		color: '#FFF',
		fontWeight: 'bold',
	},
	button: {
		backgroundColor: '#FFF',
		margin: 20,
		height: 50,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: 16,
	}
});