package com.app.utils;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;

public class MappingUtil {

    private static final ModelMapper modelMapper = new ModelMapper();

    public static <S, D> List<D> mapList(List<S> source, Class<D> destinationClass) {
        return source.stream()
                     .map(element -> modelMapper.map(element, destinationClass))
                     .collect(Collectors.toList());
    }
    
    
}
