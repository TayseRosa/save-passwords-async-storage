import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { styles } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { HeaderForm } from '../../components/HeaderForm';

export function Form() {

  const [ name, setName ] = useState('')
  const [ user, setUser ] = useState('')
  const [ password, setPassword ] = useState('')

  const { getItem, setItem } = useAsyncStorage("@savepass:passwords")

  async function handleNew(){

    try{

    const newData = {
      id: uuid.v4(),
      name,
      user, 
      password
    }

    const response = await getItem()
    const previousData = response ? JSON.parse(response) : [];

    const data = [...previousData, newData]
    
    if(newData.id !== "" && newData.name !== "" && newData.password !== "" && newData.user !== ""){
      Toast.show({
        type: 'success',
        text1: 'Cadastrado com sucesso!'
      })
      await setItem( JSON.stringify(data) )
    }else{
      Toast.show({
        type: 'error',
        text1: 'Preencha TODOS os campos!'
      })  
    }
    
  }catch( error ){
    console.log(error)

    Toast.show({
      type: 'error',
      text1: 'Não foi possivel cadastrar!'
    })
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <ScrollView>

          <HeaderForm />

          <View style={styles.form}>
            <Input
              label="Name service"
              onChangeText={ setName }
            />
            <Input
              label="Email ou user"
              autoCapitalize="none"
              onChangeText={ setUser }
            />
            <Input
              label="Password"
              secureTextEntry
              onChangeText={ setPassword }
            />
          </View>

          <View style={styles.footer}>
            <Button
              title="Save"
              onPress={ handleNew }
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView >
  );
}